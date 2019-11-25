import { JSDOM } from 'jsdom';
import { writeFileSync, writeFile, mkdirSync, existsSync } from 'fs';
import { createHash } from 'crypto';
import { resolve } from 'path';

const useCache = false;
const BASE_URL = 'https://doc.quickapp.cn/features/';
async function getApiList() {
  const dom = await getDomWithCache(BASE_URL);
  const apis: Array<Api> = [];
  dom.window.document
    .querySelectorAll(
      'div.doc-container:nth-child(2) nav.doc-menu ul.summary li.open.open.chapter ul.articles li.open.chapter a'
    )
    .forEach(el => {
      apis.push({
        name: el.textContent || '',
        href: BASE_URL + el.getAttribute('href'),
        methods: [],
        listeners: [],
        attributes: [],
        moduleName: '',
        moduleVariable: '',
        bgRestrictDesc: ''
      });
    });
  return apis;
}
// TODO: 读取多个example
// TODO: 读取fail返回错误代码定义
function getApiDefinition(api: Api) {
  console.log(`开始处理: ${api.name} ${api.href}`);
  return new Promise(async resolve => {
    const dom = await getDomWithCache(api.href);
    const section = dom.window.document.querySelector(
      'div.doc-container:nth-child(2) div.doc-content div.doc-content-inner div.page-inner div:nth-child(1) div.search-noresults > section.markdown-section.normal'
    );
    let apiReading = false;
    let apiReadAttr = false;
    let descReading = false;
    let argsReading = false;
    let returnReading = false;
    let methodReading = false;
    let exampleReading = false;
    let listenerReading = false;
    let listenerTableReading = false;
    let apiReadRunBackground = false;
    let currMethod: Method = {
      name: '',
      desc: '',
      since: '',
      example: '',
      args: [],
      return: []
    };
    let currListener: Listener = {
      name: '',
      desc: '',
      example: '',
      args: []
    };
    let currAttrName: string | null = '';
    // let methodReadArgType = '';
    const tdText = (tr: Element, i: number) =>
      safeGet(tr.children.item(i), 'textContent', '');

    // TODO: 更好的实现, 流处理差不多, 串转并
    forEachChild(section, el => {
      if (!el || !el.textContent) return;
      let { textContent } = el;
      const matchImport = textContent.match(
        /import (\w+) from '@([\w\.]+)' 或/
      );
      if (matchImport) {
        api.moduleName = matchImport[2];
        api.moduleVariable = matchImport[1];
      }

      // 遇到分隔符重置一下
      if (el.tagName === 'H2') {
        // apiReading = false;
        apiReadAttr = false;
        descReading = false;
        argsReading = false;
        returnReading = false;
        methodReading = false;
        exampleReading = false;
        listenerReading = false;
        apiReadRunBackground = false;
      }

      // 读取api
      if (apiReading) {
        // 读取method
        const matchMethod = textContent.match(
          new RegExp(
            `${api.moduleVariable}\\.(\\w+)\\s*\\((\\w*)\\)\\s*((\\d{4})\\+)?`
          )
        );
        if (matchMethod) {
          methodReading = true;
          listenerReading = false;
          currAttrName = matchMethod[2];
          if (currMethod.name !== matchMethod[1]) {
            descReading = true;
            currMethod.name && api.methods.push(currMethod);
            // TODO: 兼容多个参数, 不过一般只有一个参数
            currMethod = {
              name: matchMethod[1],
              desc: '',
              args: matchMethod[2]
                ? [
                    {
                      name: matchMethod[2],
                      desc: '',
                      type: '',
                      required: true,
                      attributes: []
                    }
                  ]
                : [],
              example: '',
              return: [],
              since: matchMethod[4]
            };
          }
        }

        // 读取listener
        const matchListener = textContent.match(
          new RegExp(
            `${api.moduleVariable}\\.(\\w+)\\s* = function\\((\\w*)\\)\\s*((\\d{4})\\+)?`
          )
        );
        if (matchListener) {
          methodReading = false;
          listenerReading = true;
          listenerTableReading = false;
          // debugger;
          currAttrName = matchListener[2];
          if (currListener.name !== matchListener[1]) {
            descReading = true;
            currListener.name && api.listeners.push(currListener);
            // TODO: 兼容多个参数, 不过一般只有一个参数
            currListener = {
              name: matchListener[1],
              desc: '',
              args: matchListener[2]
                ? [
                    {
                      name: matchListener[2],
                      desc: '',
                      type: '',
                      attributes: []
                    }
                  ]
                : [],
              example: '',
              since: matchListener[5]
            };
          }
        }

        // 还有表格定义的方式
        if (el.tagName === 'H3' && textContent === '事件') {
          methodReading = false;
          listenerTableReading = true;
        }

        // 读取描述
        if (descReading && el.tagName === 'P') {
          descReading = false;
          if (methodReading) currMethod.desc = textContent;
          if (listenerReading) currListener.desc = textContent;
          argsReading = true;
          returnReading = false;
        }
        if (textContent.match(/wifi\.onscanned = function\(data\)/)) debugger;

        // 读取参数列表
        const argNameMatch =
          textContent.match(
            /(\w*)\s*(参数|列表项参数说明)\s*(\d{4}\+)*[：\:]/
          ) || textContent.match(/(\w+)\s*(\d{4}\+)*[：\:]$/);

        const returnMatch = textContent.match(
          /(\w*)\s*(返回值|返回参数)\s*(\d{4}\+)*[：\:]/
        );
        const subAttrArg =
          returnMatch &&
          (methodReading ? currMethod : currListener).args.some(i =>
            isSubAttrName(i, returnMatch[1])
          );
        if (
          !listenerTableReading &&
          argsReading &&
          argNameMatch &&
          el.tagName.match(/H\d/)
        ) {
          // methodReadArgs = textContent.indexOf('无') === -1;
          // if (currMethod.name !== argNameMatch[1])
          currAttrName = argNameMatch[1];
          returnReading = false;
          // methodReadArgType = argNameMatch[2];
        }
        if (
          !listenerTableReading &&
          argsReading &&
          returnMatch &&
          el.tagName.match(/H\d/)
        ) {
          currAttrName = returnMatch[1];
          if (!subAttrArg) {
            returnReading = true;
            argsReading = false;
          }
        }

        const subAttrReturn = currMethod.return.some(i =>
          isSubAttrName(i, textContent)
        );
        if (returnReading && subAttrReturn) {
          currAttrName = textContent;
        }

        if (currAttrName === 'fileList') debugger;

        const currMethodOrListener = methodReading ? currMethod : currListener;

        // TODO: 合并和读取返回值的
        // 读取参数列表
        if (argsReading && el.tagName === 'TABLE' && currAttrName !== null) {
          const thead = el.querySelector('thead');

          thead &&
            thead.textContent &&
            thead.textContent.match(/参数(名|值)?类型(必填)?(说明|描述)/) &&
            el.querySelectorAll('tbody tr').forEach(tr => {
              let { other: name, since } = splitSince(tdText(tr, 0));
              let { other: type, since: typeSince } = splitSince(tdText(tr, 1));
              let desc = tdText(tr, 3) || tdText(tr, 2);
              if (!desc) debugger;

              const arg: Arg = {
                name,
                type,
                desc,
                since: since || typeSince,
                required: tdText(tr, 2) === '是',
                attributes: []
              };

              if (!currAttrName) {
                const currArg = last(currMethodOrListener.args);
                if (currArg) {
                  currArg.attributes.push(arg);
                } else {
                  console.log(
                    `关联失败 ${api.name} ${currMethodOrListener.name} arg ${currAttrName}`
                  );
                }
              } else {
                const targetAttr = currMethodOrListener.args
                  .map(i => findAttrName(i, currAttrName))
                  .filter(i => i)[0];

                if (targetAttr) {
                  targetAttr.attributes.push(arg);
                } else {
                  // debugger;
                  console.log(
                    `关联失败 ${api.name} ${currMethod.name} ${methodReading} arg ${currAttrName}`
                  );
                }
              }
            });
          // 读取完毕指针置空
          currAttrName = null;
        }

        // 读取返回值列表
        if (returnReading && el.tagName === 'TABLE' && currAttrName !== null) {
          const thead = el.querySelector('thead');

          thead &&
            thead.textContent &&
            thead.textContent.match(/(参数名)?(类型)?(说明|描述)/) &&
            el.querySelectorAll('tbody tr').forEach(tr => {
              let { other: name, since } = splitSince(tdText(tr, 0));
              let { other: type, since: typeSince } = splitSince(tdText(tr, 1));
              let desc = tdText(tr, 2);

              // TODO: 更准确的表格识别
              if (tr.children.length === 2) {
                desc = type;
                type = name;
                name = '';
              } else {
                if (!name) return console.log('name为空', tr.textContent);
              }

              const ret: Return = {
                name,
                type,
                desc,
                since: since || typeSince,
                attributes: []
              };

              if (!currAttrName) {
                currMethod.return.push(ret);
              } else {
                const target = currMethod.return
                  .map(i => findAttrName(i, currAttrName))
                  .filter(i => i)[0];

                if (target) {
                  target.attributes.push(ret);
                } else {
                  // debugger;
                  console.log(
                    `关联失败 ${api.name} ${currMethod.name} ${methodReading} return ${currAttrName}`
                  );
                }
              }
            });
          // 读取完毕指针置空
          currAttrName = null;
        }

        // 读取事件表格
        if (listenerTableReading && el.tagName === 'TABLE') {
          const thead = el.querySelector('thead');

          thead &&
            thead.textContent &&
            thead.textContent.match(/^名称描述$/) &&
            el.querySelectorAll('tbody tr').forEach(tr => {
              let { other: name, since } = splitSince(tdText(tr, 0));
              // let { other: type, since: typeSince } = splitSince(tdText(tr, 1));
              let desc = tdText(tr, 1);

              const listener: Listener = {
                name,
                desc,
                since: since,
                example: '',
                args: []
              };

              api.listeners.push(listener);
            });

          listenerTableReading = false;
        }

        // 读取example code
        if (textContent.match(/示例\s*[：\:]/)) {
          exampleReading = true;
        }
        if (exampleReading && el.tagName === 'PRE') {
          currMethod.example = textContent;
          exampleReading = false;
        }

        // 读取属性
        if (textContent.match('属性') && el.tagName === 'H3') {
          apiReadAttr = true;
        }
        if (apiReadAttr && el.tagName === 'TABLE') {
          const thead = el.querySelector('thead');

          thead &&
            thead.textContent &&
            thead.textContent.match(/名称参数类型是否可读是否可写描述/) &&
            el.querySelectorAll('tbody tr').forEach(tr => {
              const { other: name, since } = splitSince(tdText(tr, 0));

              api.attributes.push({
                name,
                type: tdText(tr, 1),
                desc: tdText(tr, 4),
                since,
                readable: tdText(tr, 2) === '是',
                writeable: tdText(tr, 3) === '是'
              });
            });
          apiReadAttr = false;
        }
      }
      if (el.tagName === 'H2' && textContent === '接口定义') {
        apiReading = true;
      }

      // 后台运行限制
      if (textContent!.match(/后台运行限制/)) {
        apiReading = false;
        apiReadRunBackground = true;
      }
      if (apiReadRunBackground && el.tagName === 'P') {
        api.bgRestrictDesc = textContent;
        apiReadRunBackground = false;
      }
    });

    api.methods.push(currMethod);
    resolve();
  });
}

function forEachChild(
  node: Element | null,
  cb: (el: Element | null, i: number) => void
) {
  if (!node) return;
  for (let i = 0, len = node.children.length; i < len; i++) {
    cb(node.children.item(i), i);
  }
}

function mapChild(node: Element, cb: (el: Element | null, i: number) => void) {
  let arr = [];
  for (let i = 0, len = node.children.length; i < len; i++) {
    arr.push(cb(node.children.item(i), i));
  }
  return arr;
}

function safeGet(obj: any, attr: string, defaultVal: string = '') {
  return obj && obj[attr] ? obj[attr] : defaultVal;
}

function isSubAttrName(root: Arg | Return, name: string): boolean {
  if (root.name === name) return true;

  if (root.attributes) {
    return (
      root.attributes.some(i => i.name === name) ||
      root.attributes.some(i => isSubAttrName(i, name))
    );
  }
  return false;
}

function findAttrName<T extends Arg | Return>(
  root: T,
  name: string | null
): T | null {
  if (root.name === name) return root;

  if (root.attributes) {
    let target: T | null = null;
    root.attributes.forEach(attr => {
      // @ts-ignore
      target = findAttrName(attr, name) || target;
    });
    return target;
  }
  return null;
}

function last(arr: Array<any>, i: number = 1) {
  return arr[arr.length - i];
}

async function getDomWithCache(url: string, cache: Boolean = useCache) {
  const hash = createHash('MD5');
  hash.update(url, 'utf8');
  const md5 = hash.digest('hex');
  const cachePath = resolve(__dirname, `./cache/`);
  const cacheFilePath = cachePath + '/' + md5;

  const dom = !cache
    ? await JSDOM.fromURL(url)
    : await JSDOM.fromFile(cacheFilePath);

  if (!cache) {
    !existsSync(cachePath) && mkdirSync(cachePath, { recursive: true });
    writeFile(cacheFilePath, dom.window.document.children[0].innerHTML, e => {
      if (e) console.log('写入缓存失败', url);
    });
  }

  return dom;
}

/**
 * 提取出since
 * @param str xxx 1040+
 */
function splitSince(str: string) {
  const matchSince = str.match(/\'?(\d{4})\+?\'?/);
  const since = matchSince ? matchSince[1] : '';
  // TODO: 可能多个since String/Object 1030+/ArrayBuffer 1030+
  const other = str.replace(/'?(\d{4})\+?'?/g, '').trim();
  return { other, since };
}

(async function main() {
  const apis = await getApiList();
  await Promise.all(apis.map(getApiDefinition));
  // console.log(apis);
  const filename = 'apis.json';
  writeFileSync(filename, JSON.stringify(apis, null, 2));
  console.log('已生成', filename);
})();
