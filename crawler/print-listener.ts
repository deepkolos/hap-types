import apis from '../apis.json';

const listeners: Array<Api> = [];

apis.forEach(api => {
  if (api.listeners.length) {
    listeners.push(api);
  }
});

console.log(listeners);
