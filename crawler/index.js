"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsdom_1 = require("jsdom");
const fs_1 = require("fs");
const crypto_1 = require("crypto");
const path_1 = require("path");
const BASE_URL = 'https://doc.quickapp.cn/features/';
function getApiList() {
    return __awaiter(this, void 0, void 0, function* () {
        const dom = yield getDomWithCache(BASE_URL);
        const apis = [];
        dom.window.document
            .querySelectorAll('div.doc-container:nth-child(2) nav.doc-menu ul.summary li.open.open.chapter ul.articles li.open.chapter a')
            .forEach(el => {
            apis.push({
                name: el.textContent || '',
                href: BASE_URL + el.getAttribute('href'),
                methods: [],
                listeners: [],
                attributes: [],
            });
        });
        return apis;
    });
}
// TODO: 读取多个example
// TODO: 读取fail返回错误代码定义
function getApiDefinition(api) {
    console.log(`开始处理: ${api.name} ${api.href}`);
    return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
        const dom = yield getDomWithCache(api.href);
        const section = dom.window.document.querySelector('div.doc-container:nth-child(2) div.doc-content div.doc-content-inner div.page-inner div:nth-child(1) div.search-noresults > section.markdown-section.normal');
        let apiReading = false;
        let apiReadAttr = false;
        let descReading = false;
        let argsReading = false;
        let returnReading = false;
        let methodReading = false;
        let exampleReading = false;
        let listenerReading = false;
        let apiReadRunBackground = false;
        let currMethod = {
            name: '',
            desc: '',
            since: '',
            example: '',
            args: [],
            return: [],
        };
        let currListener = {
            name: '',
            desc: '',
            example: '',
            args: [],
        };
        let currAttrName = '';
        // let methodReadArgType = '';
        const tdText = (tr, i) => safeGet(tr.children.item(i), 'textContent', '');
        // TODO: 更好的实现, 流处理差不多, 串转并
        forEachChild(section, el => {
            if (!el || !el.textContent)
                return;
            let { textContent } = el;
            const matchImport = textContent.match(/import (\w+) from '@([\w\.]+)' 或/);
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
                const matchMethod = textContent.match(new RegExp(`${api.moduleVariable}\\.(\\w+)\\s*\\((\\w*)\\)\\s*((\\d{4})\\+)?`));
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
                                        attributes: [],
                                    },
                                ]
                                : [],
                            example: '',
                            return: [],
                            since: matchMethod[4],
                        };
                    }
                }
                // 读取listener
                const matchListener = textContent.match(new RegExp(`${api.moduleVariable}\\.(\\w+)\\s* = function\\((\\w*)\\)\\s*((\\d{4})\\+)?`));
                if (matchListener) {
                    methodReading = false;
                    listenerReading = true;
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
                                        attributes: [],
                                    },
                                ]
                                : [],
                            example: '',
                            since: matchListener[5],
                        };
                    }
                }
                // 读取描述
                if (descReading && el.tagName === 'P') {
                    descReading = false;
                    if (methodReading)
                        currMethod.desc = textContent;
                    if (listenerReading)
                        currListener.desc = textContent;
                    argsReading = true;
                    returnReading = false;
                }
                if (textContent.match(/share\.getAvailablePlatforms\(OBJECT\) 1010\+/))
                    debugger;
                // 读取参数列表
                const argNameMatch = textContent.match(/(\w*)\s*(参数)\s*(\d{4}\+)*[：\:]/) ||
                    textContent.match(/(\w+)\s*(\d{4}\+)*[：\:]$/);
                const returnMatch = textContent.match(/(\w*)\s*(返回值|返回参数)\s*(\d{4}\+)*[：\:]/);
                const subAttrArg = returnMatch &&
                    (methodReading ? currMethod : currListener).args.some(i => isSubAttrName(i, returnMatch[1]));
                if (argsReading && argNameMatch && el.tagName.match(/H\d/)) {
                    // methodReadArgs = textContent.indexOf('无') === -1;
                    // if (currMethod.name !== argNameMatch[1])
                    currAttrName = argNameMatch[1];
                    returnReading = false;
                    // methodReadArgType = argNameMatch[2];
                }
                if (argsReading && returnMatch && el.tagName.match(/H\d/)) {
                    currAttrName = returnMatch[1];
                    if (!subAttrArg) {
                        returnReading = true;
                        argsReading = false;
                    }
                }
                const subAttrReturn = currMethod.return.some(i => isSubAttrName(i, textContent));
                if (returnReading && subAttrReturn) {
                    currAttrName = textContent;
                }
                if (currAttrName === 'fileList')
                    debugger;
                const currMethodOrListener = methodReading ? currMethod : currListener;
                // TODO: 合并和读取返回值的
                // 读取参数列表
                if (argsReading && el.tagName === 'TABLE' && currAttrName !== null) {
                    const thead = el.querySelector('thead');
                    thead &&
                        thead.textContent &&
                        thead.textContent.match(/参数(名|值)?类型(必填)?(说明|描述)/) &&
                        el.querySelectorAll('tbody tr').forEach(tr => {
                            const { other: name, since } = splitSince(tdText(tr, 0));
                            const { other: type, since: typeSince } = splitSince(tdText(tr, 1));
                            if (!name)
                                return console.log('name为空', tr.textContent);
                            const arg = {
                                name,
                                type,
                                desc: tdText(tr, 3),
                                since: since || typeSince,
                                required: tdText(tr, 2) === '是',
                                attributes: [],
                            };
                            if (!currAttrName) {
                                const currArg = last(currMethodOrListener.args);
                                if (currArg) {
                                    currArg.attributes.push(arg);
                                }
                                else {
                                    console.log(`关联失败 ${api.name} ${currMethodOrListener.name} arg ${currAttrName}`);
                                }
                            }
                            else {
                                const targetAttr = currMethodOrListener.args
                                    .map(i => findAttrName(i, currAttrName))
                                    .filter(i => i)[0];
                                if (targetAttr) {
                                    targetAttr.attributes.push(arg);
                                }
                                else {
                                    // debugger;
                                    console.log(`关联失败 ${api.name} ${currMethod.name} ${methodReading} arg ${currAttrName}`);
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
                            const { other: name, since } = splitSince(tdText(tr, 0));
                            const { other: type, since: typeSince } = splitSince(tdText(tr, 1));
                            if (!name)
                                return console.log('name为空', tr.textContent);
                            const ret = {
                                name,
                                type,
                                desc: tdText(tr, 2),
                                since: since || typeSince,
                                attributes: [],
                            };
                            if (!currAttrName) {
                                currMethod.return.push(ret);
                            }
                            else {
                                const target = currMethod.return
                                    .map(i => findAttrName(i, currAttrName))
                                    .filter(i => i)[0];
                                if (target) {
                                    target.attributes.push(ret);
                                }
                                else {
                                    // debugger;
                                    console.log(`关联失败 ${api.name} ${currMethod.name} ${methodReading} return ${currAttrName}`);
                                }
                            }
                        });
                    // 读取完毕指针置空
                    currAttrName = null;
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
                    el.querySelectorAll('tbody tr').forEach(tr => {
                        const { other: name, since } = splitSince(tdText(tr, 0));
                        api.attributes.push({
                            name,
                            type: tdText(tr, 1),
                            desc: tdText(tr, 4),
                            since,
                            readable: tdText(tr, 2) === '是',
                            writeable: tdText(tr, 3) === '是',
                        });
                    });
                }
            }
            if (el.tagName === 'H2' && textContent === '接口定义') {
                apiReading = true;
            }
            // 后台运行限制
            if (textContent.match(/后台运行限制/)) {
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
    }));
}
function forEachChild(node, cb) {
    if (!node)
        return;
    for (let i = 0, len = node.children.length; i < len; i++) {
        cb(node.children.item(i), i);
    }
}
function mapChild(node, cb) {
    let arr = [];
    for (let i = 0, len = node.children.length; i < len; i++) {
        arr.push(cb(node.children.item(i), i));
    }
    return arr;
}
function safeGet(obj, attr, defaultVal = '') {
    return obj && obj[attr] ? obj[attr] : defaultVal;
}
function isSubAttrName(root, name) {
    if (root.name === name)
        return true;
    if (root.attributes) {
        return (root.attributes.some(i => i.name === name) ||
            root.attributes.some(i => isSubAttrName(i, name)));
    }
    return false;
}
function findAttrName(root, name) {
    if (root.name === name)
        return root;
    if (root.attributes) {
        let target = null;
        root.attributes.forEach(attr => {
            // @ts-ignore
            target = findAttrName(attr, name) || target;
        });
        return target;
    }
    return null;
}
function last(arr, i = 1) {
    return arr[arr.length - i];
}
function getDomWithCache(url, cache = true) {
    return __awaiter(this, void 0, void 0, function* () {
        const hash = crypto_1.createHash('MD5');
        hash.update(url, 'utf8');
        const md5 = hash.digest('hex');
        const cachePath = path_1.resolve(__dirname, `./cache/`);
        const cacheFilePath = cachePath + '/' + md5;
        const dom = !cache
            ? yield jsdom_1.JSDOM.fromURL(url)
            : yield jsdom_1.JSDOM.fromFile(cacheFilePath);
        if (!cache) {
            !fs_1.existsSync(cachePath) && fs_1.mkdirSync(cachePath, { recursive: true });
            fs_1.writeFile(cacheFilePath, dom.window.document.children[0].innerHTML, e => {
                if (e)
                    console.log('写入缓存失败', url);
            });
        }
        return dom;
    });
}
/**
 * 提取出since
 * @param str xxx 1040+
 */
function splitSince(str) {
    const matchSince = str.match(/\'?(\d{4})\+?\'?/);
    const since = matchSince ? matchSince[1] : '';
    const other = str.replace(/'?(\d{4})\+?'?/, '').trim();
    return { other, since };
}
(function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const apis = yield getApiList();
        yield Promise.all(apis.map(getApiDefinition));
        // console.log(apis);
        const filename = 'apis.json';
        fs_1.writeFileSync(filename, JSON.stringify(apis, null, 2));
        console.log('已生成', filename);
    });
})();
//# sourceMappingURL=index.js.map