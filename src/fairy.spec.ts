import fairyJson from '../data/fairy.json';
import Fairy from './fairy';
import { IFairy } from './interface';

const fairyData = fairyJson as IFairy[];

describe('`Sakura` Fairy class', () => {
  // tslint:disable-next-line:variable-name
  const Sakura = new Fairy(fairyData.find(({ codename }) => codename === 'Sakura') as IFairy);
  test('returns Doll class of `Sakura`', () => {
    expect(Sakura).toBeTruthy();
  });
  test('returns name', () => {
    expect(Sakura.name).toBe('야에 사쿠라 ');
  });
  test('returns introduce', () => {
    expect(Sakura.introduce).toBe('“피어나거라, 이 슬픈 세상이여”');
  });
  test('returns description', () => {
    expect(Sakura.description).toBe('다수의 적에게 대미지를 입힐 수 있고, 전투 중 대량의 불 기둥을 만들어 닿은 적들에게 피해를 입힙니다');
  });
  test('set level to 70', () => {
    Sakura.level = 70;
    expect(Sakura.level).toBe(70);
  });
  test('throws error when set level to 0', () => {
    expect(() => Sakura.level = 0).toThrow('`level` must be greater than 0');
  });
  test('throws error when set level to 101', () => {
    expect(() => Sakura.level = 101).toThrow('`level` must be less than 101');
  });
  test('set qualityLevel to 3', () => {
    Sakura.qualityLevel = 3;
    expect(Sakura.qualityLevel).toBe(3);
  });
  test('throws error when set qualityLevel to 0', () => {
    expect(() => Sakura.qualityLevel = 0).toThrow('`qualityLevel` must be greater than 0');
  });
  test('throws error when set qualityLevel to 6', () => {
    expect(() => Sakura.qualityLevel = 6).toThrow('`qualityLevel` must be less than 6');
  });
  test('set skillLevel to 7', () => {
    Sakura.skillLevel = 7;
    expect(Sakura.skillLevel).toBe(7);
  });
  test('throws error when set skillLevel to 0', () => {
    expect(() => Sakura.skillLevel = 0).toThrow('`skillLevel` must be greater than 0');
  });
  test('throws error when set skillLevel to 11', () => {
    expect(() => Sakura.skillLevel = 11).toThrow('`skillLevel` must be less than 11');
  });
  test('returns stats when level=70, qualityLevel=3', () => {
    expect(Sakura.stats).toMatchObject({
      pow: 13.799999999999999,
      dodge: 13.2,
      criticalHarmRate: 17.4,
      armor: 3.5999999999999996,
    });
  });
  test('returns skill when skillLevel=7', () => {
    expect(Sakura.skill).toMatchObject({
      codename: 'Sakura',
      cooldown: 0,
      cooldownType: 'frame',
      description: '다음 전투에서 비옥환이 적이 있는 곳에 넓은 범위의 불기둥을 만들어, 닿는 적에게 2초 동안 0.5초마다 80씩의 피해를 입힌다.',
      detail:{ '불기둥 대미지': '80' },
      id: '900118',
      initialCooldown: 30,
      name: '비옥환세',
    });
  });
});
