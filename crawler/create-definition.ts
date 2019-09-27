export function createApiDefinition(api: Api): string {
  if (!api.moduleName) return '';

  const interfaceName = firstUpperCase(api.moduleVariable);
  const otherDefinitions: Array<string> = [];
  const methodDefinitions = api.methods
    .map(method => {
      const out = createMethod(method);
      otherDefinitions.push(...out.definitions);
      return out.out;
    })
    .join('\n');
  const listenerDefinitions = api.listeners
    .map(listener => {
      const out = createListener(listener);
      otherDefinitions.push(...out.definitions);
      return out.out;
    })
    .join('\n');

  const attributeDefinitions = api.attributes
    .map(attribute => {
      const out = createAttribute(attribute);
      otherDefinitions.push(...out.definitions);
      return out.out;
    })
    .join('\n');

  return `
/**
 * ${api.name}
 * @后台运行限制 ${api.bgRestrictDesc}
 * @see ${api.href}
 */
declare module '@${api.moduleName}' {
  interface ${interfaceName} {
    ${methodDefinitions}
    ${listenerDefinitions}
    ${attributeDefinitions}
  }

${otherDefinitions.reverse().join('\n')}

  const ${api.moduleVariable}: ${interfaceName};
  export default ${api.moduleVariable};
}`;
}

function createMethod(
  method: Method
): { out: string; definitions: Array<string> } {
  if (!method.name) return { out: '', definitions: [] };
  const example = method.example
    ? `
     * @example ${method.example
       .trim()
       .split('\n')
       .map((line, i) => (i ? `     * ${line}` : line))
       .join('\n')}`
    : '';
  const definitions: Array<string> = [];
  const since = parseSince(method.since);
  const argDefs = method.args
    .filter(arg => arg.name.toLowerCase() === 'object' && arg.attributes.length)
    .map(arg => {
      const out = createDefinition(arg, method.name);
      definitions.push(...out.definitions);

      return `${out.name}: ${out.type}`;
    })
    .join(',');
  const returnOut = createReturn(method);
  definitions.push(...returnOut.definitions);

  const out = `
    /**
     * ${method.desc.trim()}${since}${example}
     */
    ${method.name}(${argDefs}): ${returnOut.out};`;
  return { out, definitions };
}

function createListener(
  listener: Listener
): { out: string; definitions: Array<string> } {
  let outName = listener.name;
  let outType = 'Function';
  const definitions: Array<string> = [];
  const since = parseSince(listener.since);

  if (!outName.startsWith('on')) outName = 'on' + outName;
  if (listener.args.length) {
    const argDef = listener.args
      .map(arg => {
        const out = createDefinition(arg, '', {
          ...listener,
          type: '',
          attributes: []
        });
        definitions.push(...out.definitions);
        return `${out.name}: ${out.type}`;
      })
      .join(',');
    outType = `(${argDef}) => void;`;
  }

  return {
    out: `
    /**
     * ${listener.desc}${since}
     */
    ${outName}?: ${outType}`,
    definitions
  };
}

function createAttribute(
  attribute: Attribute
): { out: string; definitions: Array<string> } {
  let outName = attribute.name;
  let outType = attribute.type;
  let since = parseSince(attribute.since);

  return {
    out: `
    /**
     * ${attribute.desc}${since}
     * @readable ${attribute.readable}
     * @writeable ${attribute.writeable}
     */
    ${outName}: ${outType}`,
    definitions: []
  };
}

function createReturn(
  method: Method
): { out: string; definitions: Array<string> } {
  const ret = method.return;
  let out = '';
  let definitions: Array<string> = [];

  if (ret.length === 0) {
    // out = 'void';
    out = 'any';
  } else if (ret.length === 1) {
    out = ret[0].type;
  } else {
    const def = createDefinition({
      name: method.name + 'Return',
      type: 'object',
      desc: `${method.name}的返回值`,
      attributes: ret
    });
    out = def.type;
    definitions = def.definitions;
  }

  return { out, definitions };
}

// 递归生成生成interface定义
// 需要打扁结构, 通过字段关联起来
function createDefinition(
  from: Arg & Return,
  prefix: string = '', // getAnonymousPrefix(),
  parent?: Arg | Return
): { name: string; type: string; definitions: Array<string> } {
  const type = from.type.toLowerCase();
  const attrLen = from.attributes.length;
  const definitions: Array<string> = [];
  const since = parseSince(from.since);

  let outType = (parent
    ? [prefix, parent.name, from.name]
    : [prefix, from.name]
  )
    .map(firstUpperCase)
    .join('');
  let outName = firstLowerCase(from.name);

  const process = (
    name: string,
    processCB: () => void,
    otherCheck: Boolean = false
  ) => {
    if (type === name || otherCheck) {
      if (!attrLen) {
        outType = firstUpperCase(name);
      } else {
        processCB();
      }
    }
  };

  process(
    'object',
    () => {
      const attrDefinitions = from.attributes
        .map(attr => {
          const out = createDefinition(attr, prefix, from);
          definitions.push(...out.definitions);

          return `   ${out.name}: ${out.type};`;
        })
        .join('\n');
      const attrDocs = from.attributes
        .map(
          attr =>
            `   * @param ${attr.name} ${attr.desc}${
              attr.since ? ` ${attr.since}+` : ''
            }`
        )
        .join('\n');

      definitions.push(`
  /**
   * ${from.desc.trim()}${since}
${attrDocs}
   */
  interface ${outType} {
${attrDefinitions}
  }`);
    },
    type === '' && attrLen !== 0
  );

  process('function', () => {
    outType += 'CB';

    const out = createDefinition(
      { ...from, name: from.name + 'Arg', type: 'object' },
      prefix,
      from
    );

    // 目前函数仅仅一个参数, 应该够用
    definitions.push(...out.definitions);
    definitions.push(`
  /**
   * ${from.desc.trim()}${since}
   */
  type ${outType} = (${out.name}: ${out.type}) => any;`);
  });

  process('array', () => {
    outType += 'Array';
    const out = createDefinition(
      { ...from, name: from.name + 'Item', type: 'object' },
      prefix,
      from
    );
    definitions.push(...out.definitions);
    definitions.push(`
  /**
   * ${from.desc.trim()}${since}
   */
  type ${outType} = Array<${out.type}>;`);
  });

  if (!['object', 'function', 'array', ''].includes(type)) {
    // debugger;
    outType = firstUpperCase(type);

    if (type.indexOf('或') !== -1) {
      outType = type
        .split('或')
        .map(firstUpperCase)
        .join(' | ');
    }

    if (type.indexOf('/') !== -1) {
      outType = type
        .split('/')
        .map(firstUpperCase)
        .join(' | ');
    }

    if (type === 'boolen') outType = 'Boolean';
  }

  if (outName.indexOf('\\') !== -1) outName = `'${outName}'`;
  if (outType === 'Array') outType = `Array<any>`;

  return {
    name: outName,
    type: outType,
    definitions
  };
}

// let anonymousPrefixId = 0;
// function getAnonymousPrefix(): string {
//   return `a${anonymousPrefixId++}_`;
// }

function firstUpperCase(str: string): string {
  str = str ? str[0].toUpperCase() + str.slice(1) : str;
  return str.trim();
}

function firstLowerCase(str: string): string {
  str ? str[0].toLowerCase() + str.slice(1) : str;
  return str.trim();
}

function parseSince(since?: string) {
  return since
    ? `
     * @since ${since}`
    : '';
}

(function main() {
  require('../apis.json').forEach(createApiDefinition);
})();
