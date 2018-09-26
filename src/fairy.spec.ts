import fairyJson from '../data/fairy.json';
import Fairy from './fairy';
import { IFairy } from './interface';

const fairyData = fairyJson as IFairy[];

describe('`DJMAXSEHRA` Fairy class', () => {
  // tslint:disable-next-line:variable-name
  const DJMAXSEHRA = new Fairy(fairyData.find(({ codename }) => codename === 'DJMAXSEHRA') as IFairy);
  test('returns Doll class of `DJMAXSEHRA`', () => {
    expect(DJMAXSEHRA).toBeTruthy();
  });
  test('returns name', () => {
    expect(DJMAXSEHRA.name).toBe('fairy-10001005');
  });
  test('returns introduce', () => {
    expect(DJMAXSEHRA.introduce).toBe('fairy-20001005');
  });
  test('returns description', () => {
    expect(DJMAXSEHRA.description).toBe('fairy-30001005');
  });
  test('returns skins', () => {
    expect(DJMAXSEHRA.skins).toMatchObject([
      { codename: 'DJMAXSEHRA_1', description: 'fairy_skin-20000070', id: 70, name: 'fairy_skin-10000070' },
      { codename: 'DJMAXSEHRA_2', description: 'fairy_skin-20000071', id: 71, name: 'fairy_skin-10000071' },
      { codename: 'DJMAXSEHRA_3', description: 'fairy_skin-20000072', id: 72, name: 'fairy_skin-10000072' },
    ]);
  });
  test('set level to 70', () => {
    DJMAXSEHRA.level = 70;
    expect(DJMAXSEHRA.level).toBe(70);
  });
  test('throws error when set level to 0', () => {
    expect(() => DJMAXSEHRA.level = 0).toThrow('`level` must be greater than 0');
  });
  test('set qualityLevel to 3', () => {
    DJMAXSEHRA.qualityLevel = 3;
    expect(DJMAXSEHRA.qualityLevel).toBe(3);
  });
  test('throws error when set qualityLevel to 0', () => {
    expect(() => DJMAXSEHRA.qualityLevel = 0).toThrow('`qualityLevel` must be greater than 0');
  });
  test('throws error when set qualityLevel to 6', () => {
    expect(() => DJMAXSEHRA.qualityLevel = 6).toThrow('`qualityLevel` must be less than 6');
  });
  test('set skillLevel to 7', () => {
    DJMAXSEHRA.skillLevel = 7;
    expect(DJMAXSEHRA.skillLevel).toBe(7);
  });
  test('throws error when set skillLevel to 0', () => {
    expect(() => DJMAXSEHRA.skillLevel = 0).toThrow('`skillLevel` must be greater than 0');
  });
  test('throws error when set skillLevel to 11', () => {
    expect(() => DJMAXSEHRA.skillLevel = 11).toThrow('`skillLevel` must be less than 11');
  });
  test('returns stats when level=70, qualityLevel=3', () => {
    expect(DJMAXSEHRA.stats).toMatchObject({
      criticalHarmRate: 10.2,
      dodge: 25.8,
      hit: 20.4,
      pow: 7.8,
    });
  });
  test('returns skill when skillLevel=7', () => {
    expect(DJMAXSEHRA.skill).toMatchObject({
      codename: 'LadyMadeSTAR',
      consumption: 1,
      cooldown: 0,
      cooldownType: 'frame',
      description: 'battle_skill_config-290015207',
      detail: 'battle_skill_config-390015207',
      id: '900152',
      initialCooldown: 30,
      name: 'battle_skill_config-190015207',
    });
  });
});
