const apis = require('../../apis.json');
import { createApiDefinition } from '../create-definition';

describe('createDefinition', () => {
  test('return', () => {
    const dts = createApiDefinition(apis[0]);

    console.log(dts);
  });

  test('empty method', () => {
    const dts = createApiDefinition(apis[1]);

    console.log(dts);
  });

  test('method', () => {
    const dts = createApiDefinition(apis[2]);

    console.log(dts);
  });
});
