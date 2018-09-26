import dollJson from '../data/doll.json';
import Doll from './doll';
import { IDoll } from './interface';

const dollData = dollJson as IDoll[];

describe('`Doll.isMod()`', () => {
  test('returns true when id=20099', () => {
    expect(Doll.isMod(20099)).toBeTruthy();
  });
  test('returns false when id=99', () => {
    expect(Doll.isMod(99)).toBeFalsy();
  });
});

describe('`CLEAR` Doll class', () => {
  const CLEAR = new Doll(dollData.find(({ codename }) => codename === 'CLEAR') as IDoll);
  test('returns Doll class of `CLEAR`', () => {
    expect(CLEAR).toBeTruthy();
  });
  test('returns name', () => {
    expect(CLEAR.name).toBe('gun-10001009');
  });
  test('returns extra', () => {
    expect(CLEAR.extra).toBe('gun-40001009');
  });
  test('returns skin', () => {
    expect(CLEAR.skins).toMatchObject([{
      id: 509,
      name: 'skin-10000509',
    }]);
  });
  test('returns obatin', () => {
    expect(CLEAR.obtain).toMatchObject([
      { description: 'gun_obtain-10000206', id: 206 },
    ]);
  });
  test('set level to 70', () => {
    CLEAR.level = 70;
    expect(CLEAR.level).toBe(70);
  });
  test('throws error when set level to 0', () => {
    expect(() => CLEAR.level = 0).toThrow('`level` must be greater than 0');
  });
  test('set favor to 200', () => {
    CLEAR.favor = 200;
    expect(CLEAR.favor).toBe(200);
  });
  test('throws error when set favor to -1', () => {
    expect(() => CLEAR.favor = -1).toThrow('`favor` must be greater than -1');
  });
  test('set dummyLink to 3', () => {
    CLEAR.dummyLink = 3;
    expect(CLEAR.dummyLink).toBe(3);
  });
  test('throws error when set dummyLink to 0', () => {
    expect(() => CLEAR.dummyLink = 0).toThrow('`dummyLink` must be greater than 0');
  });
  test('set skillLevel to 7', () => {
    CLEAR.skillLevel = 7;
    expect(CLEAR.skillLevel).toBe(7);
  });
  test('throws error when set skillLevel to 0', () => {
    expect(() => CLEAR.skillLevel = 0).toThrow('`skillLevel` must be greater than 0');
  });
  test('throws error when set skillLevel to 11', () => {
    expect(() => CLEAR.skillLevel = 11).toThrow('`skillLevel` must be less than 11');
  });
  test('set skillLevel2 to 7', () => {
    CLEAR.skillLevel2 = 7;
    expect(CLEAR.skillLevel2).toBe(7);
  });
  test('throws error when set skillLevel2 to 0', () => {
    expect(() => CLEAR.skillLevel2 = 0).toThrow('`skillLevel2` must be greater than 0');
  });
  test('throws error when set skillLevel2 to 11', () => {
    expect(() => CLEAR.skillLevel2 = 11).toThrow('`skillLevel2` must be less than 11');
  });
  test('returns stats when level=70, dummyLink=3, favor=200', () => {
    expect(CLEAR.stats).toMatchObject({
      hp: 280,
      pow: 29,
      hit: 52,
      rate: 54,
      dodge: 75,
    });
  });
  test('returns effect when dummyLink=3', () => {
    expect(CLEAR.effect).toMatchObject({
      effectCenter: 5,
      effectPos: [1, 2, 4, 7, 8],
      effectType: 'all',
      gridEffect: {
        hit: 37,
        rate: 22,
      },
    });
  });
  test('returns skill1 when skillLevel=7', () => {
    expect(CLEAR.skill1).toMatchObject({
      codename: 'Clear',
      cooldown: 261,
      cooldownType: 'frame',
      description: 'battle_skill_config-210940107',
      detail: 'battle_skill_config-310940107',
      id: '109401',
      initialCooldown: 180,
      name: 'battle_skill_config-110940107',
    });
  });
  test('skill2 must be null', () => {
    expect(CLEAR.skill2).toBe(null);
  });
  test('`toJSON()`', () => {
    expect(CLEAR.toJSON()).toMatchObject(dollData.find(({ codename }) => codename === 'CLEAR')!);
  });
});

describe('`M4A1Mod` Doll class', () => {
  // tslint:disable-next-line:variable-name
  const M4A1Mod = new Doll(dollData.find(({ codename }) => codename === 'M4A1Mod') as IDoll);
  test('returns Doll class of M4A1Mod', () => {
    expect(M4A1Mod).toBeTruthy();
  });
  test('returns skill2', () => {
    expect(M4A1Mod.skill2).toMatchObject({
      codename: 'M4_Nightmare',
      cooldown: 0,
      cooldownType: 'frame',
      description: 'battle_skill_config-280110810',
      detail: 'battle_skill_config-380110810',
      id: '801108',
      initialCooldown: 0,
      name: 'battle_skill_config-180110810',
    });
  });
});

describe('`M1A1` Doll class', () => {
  const M1A1 = new Doll(dollData.find(({ codename }) => codename === 'M1A1') as IDoll);
  test('returns Doll class of M1A1', () => {
    expect(M1A1).toBeTruthy();
  });
  test('returns obatin', () => {
    expect(M1A1.obtain).toMatchObject([
      { description: 'gun_obtain-10000018', id: 18 },
      { description: 'gun_obtain-10000019', id: 19 },
    ]);
  });
});
