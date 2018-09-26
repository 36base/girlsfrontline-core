import { dolls, equips, fairies } from './index';

describe('entry point', () => {
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
