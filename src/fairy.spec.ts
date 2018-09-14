import fairyJson from '../data/fairy.json';
import Fairy from './fairy';
import { init } from './index';
import { IFairy } from './interface';

const fairyData = fairyJson as IFairy[];
beforeAll(() => {
  return init();
});

describe('`DJMAXSEHRA` Fairy class', () => {
  // tslint:disable-next-line:variable-name
  const DJMAXSEHRA = new Fairy(fairyData.find(({ codename }) => codename === 'DJMAXSEHRA') as IFairy);
  test('returns Doll class of `DJMAXSEHRA`', () => {
    expect(DJMAXSEHRA).toBeTruthy();
  });
  test('returns name', () => {
    expect(DJMAXSEHRA.name).toBe('세라&니나');
  });
  test('returns introduce', () => {
    expect(DJMAXSEHRA.introduce).toBe('“하얀 우주에서, 반짝반짝 빛나는 저희를 찾아보세요！”');
  });
  test('returns description', () => {
    expect(DJMAXSEHRA.description).toBe('아군의 화력을 상승시키고 적군의 명중을 감소시키는 능력을 가지고 있습니다, ' +
    '평소에는 동료들을 응원하거나 상대 팀을 헐뜯습니다(어느 쪽에 고용됐는지에 따라서요).');
  });
  test('returns skins', () => {
    expect(DJMAXSEHRA.skins).toMatchObject([
      { codename: 'DJMAXSEHRA_1', description: '1단계 기본 외형', id: 70, name: '세라&니나' },
      { codename: 'DJMAXSEHRA_2', description: '2단계 기본 외형', id: 71, name: '세라&니나' },
      { codename: 'DJMAXSEHRA_3', description: '3단계 기본 외형', id: 72, name: '세라&니나' },
    ]);
  });
  test('set level to 70', () => {
    DJMAXSEHRA.level = 70;
    expect(DJMAXSEHRA.level).toBe(70);
  });
  test('throws error when set level to 0', () => {
    expect(() => DJMAXSEHRA.level = 0).toThrow('`level` must be greater than 0');
  });
  test('throws error when set level to 101', () => {
    expect(() => DJMAXSEHRA.level = 101).toThrow('`level` must be less than 101');
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
      description: '다음 전투에서, 본 제대 전체의 화력을 15% 상승시키고 적군 전체의 명중을 8% 감소시킨다. 지속시간 20초',
      detail: { '명중 감소치': '8%', '화력 상승치': '15%' },
      id: '900152',
      initialCooldown: 30,
      name: 'LadyMade Star',
    });
  });
});
