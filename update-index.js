const fs = require('fs');
const os = require('os');

const index = fs
  .readdirSync('./')
  .map(file => `/// <reference path="./${file}"/>`)
  .join(os.EOL);

fs.writeFileSync('./index.d.ts', index);
