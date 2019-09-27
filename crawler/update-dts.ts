import apis from '../apis.json';
import { createApiDefinition } from './create-definition.js';
import { writeFile } from 'fs';
import { resolve } from 'path';

(function main() {
  apis.forEach(api => {
    if (api.moduleName) {
      writeFile(
        resolve(__dirname, `../../${api.moduleName}.d.ts`),
        createApiDefinition(api),
        e => {
          e && console.log(`写入${api.moduleName}.d.ts失败`);
        },
      );
    }
  });
})();
