const fs = require('fs');
const os = require('os');

const index = fs
  .readdirSync('./')
  .filter(file => file.endsWith('.d.ts') && file !== 'index.d.ts')
  .map(file => `/// <reference path="./${file}"/>`)
  .join(os.EOL);

fs.writeFileSync('./index.d.ts', index);
