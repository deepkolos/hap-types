import apis from '../apis.json';

const types: Array<string> = [];

function collectType(node: { [key: string]: any }) {
  if (typeof node.type === 'string' && !types.includes(node.type)) {
    types.push(node.type);
  }
  Object.keys(node).forEach(key => {
    if (Array.isArray(node[key])) {
      node[key].forEach(collectType);
    }
  });
}

apis.forEach(collectType);

console.log(types);
