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
  return `
/**
 * ${api.name}
 * ${api.bgRestrictDesc}
 * @see ${api.href}
 */
declare module '@${api.moduleName}' {
  interface ${interfaceName} {
    ${methodDefinitions}
  }

${otherDefinitions.reverse().join('\n')}

  const ${api.moduleVariable}: ${interfaceName};
  export default ${api.moduleVariable};
}`;
}

function createMethod(
  method: Method,
): { out: string; definitions: Array<string> } {
  if (!method.name) return { out: '', definitions: [] };
  const example = method.example
    ? `     * @example ${method.example
        .split('\n')
        .map((line, i) => (i ? `     * ${line}` : line))
        .join('\n')}`
    : '';
  const definitions: Array<string> = [];
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
     * ${method.desc.trim()}
${example}
     */
    ${method.name}(${argDefs}): ${returnOut.out};`;
  return { out, definitions };
}

// 递归生成生成interface定义
// 需要打扁结构, 通过字段关联起来
function createDefinition(
  from: Arg & Return,
  prefix: string = '', // getAnonymousPrefix(),
  parent?: Arg | Return,
): { name: string; type: string; definitions: Array<string> } {
  const type = from.type.toLowerCase();
  const attrLen = from.attributes.length;
  const definitions: Array<string> = [];
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
    otherCheck: Boolean = false,
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
          if (out.name === 'stepsList') debugger;
          return `   ${out.name}: ${out.type};`;
        })
        .join('\n');
      const attrDocs = from.attributes
        .map(attr => `   * @param ${attr.name} ${attr.desc}`)
        .join('\n');

      definitions.push(`
  /**
   * ${from.desc}
${attrDocs}
   */
  interface ${outType} {
${attrDefinitions}
  }`);
    },
    type === '' && attrLen !== 0,
  );

  process('function', () => {
    outType += 'CB';

    const out = createDefinition(
      { ...from, name: from.name + 'Arg', type: 'object' },
      prefix,
      from,
    );

    // 目前函数仅仅一个参数, 应该够用
    definitions.push(...out.definitions);
    definitions.push(`
  /**
   * ${from.desc}
   */
  type ${outType} = (${out.name}: ${out.type}) => any;`);
  });

  process('array', () => {
    outType += 'Array';
    const out = createDefinition(
      { ...from, name: from.name + 'Item', type: 'object' },
      prefix,
      from,
    );
    definitions.push(...out.definitions);
    definitions.push(`
  /**
   * ${from.desc}
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
    definitions,
  };
}

// let anonymousPrefixId = 0;
// function getAnonymousPrefix(): string {
//   return `a${anonymousPrefixId++}_`;
// }

/**
 * xxxcabl
 * @param a dasd
 */
type XXCallback = (a: string) => any;

/**
/
  @param path path desc
/
interface $0_Object {
  path: string;
}
{
  "name": "OBJECT",
  "desc": "",
  "type": "",
  "required": true,
  "attributes": [
    {
      "name": "path",
      "type": "String",
      "desc": "返回目标页面的路径，可以是以下几种取值：不传该参数，返回上一页面以\"/\"开头的应用内已打开页面的路径；例：/about。特殊的,如果 path 的值是\"/\",则跳转到页面名称为\"/\"的页,没有则跳转到首页注意点：path 需要是以\"/\"开头的当前应用已经打开的页面路径，否则均视为无效参数，返回上一页面若根据 path 未匹配到已经打开的页面，返回上一页面若根据 path 参数匹配到多个页面，返回至最后打开的页面",
      "since": "1020",
      "required": false,
      "attributes": []
    }
  ]
}
 */

function createReturn(
  method: Method,
): { out: string; definitions: Array<string> } {
  const ret = method.return;
  let out = '';
  let definitions: Array<string> = [];

  if (ret.length === 0) {
    out = 'void';
  } else if (ret.length === 1) {
    out = ret[0].type;
  } else {
    const def = createDefinition({
      name: method.name + 'Return',
      type: 'object',
      desc: `${method.name}的返回值`,
      attributes: ret,
    });
    out = def.type;
    definitions = def.definitions;
  }

  return { out, definitions };
}

function firstUpperCase(str: string): string {
  str = str ? str[0].toUpperCase() + str.slice(1) : str;
  return str.trim();
}

function firstLowerCase(str: string): string {
  str ? str[0].toLowerCase() + str.slice(1) : str;
  return str.trim();
}

(function main() {
  require('../apis.json').forEach(createApiDefinition);
})();
