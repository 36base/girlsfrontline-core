import { dolls, equips, fairies, i18next, init } from './index';

beforeAll(() => {
  return init();
});

describe('entry point', () => {
  test('`i18next` should not be undefined', () => {
    expect(i18next).toBeTruthy();
  });
  test('`dolls` should not be undefined', () => {
    expect(dolls).toBeTruthy();
  });
  test('`equips` should not be undefined', () => {
    expect(equips).toBeTruthy();
  });
  test('`fairies` should not be undefined', () => {
    expect(fairies).toBeTruthy();
  });
});
