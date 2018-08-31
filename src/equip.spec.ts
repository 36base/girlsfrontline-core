import equipJson from '../data/equip.json';
import Equip from './equip';
import { IEquip } from './interface';

const equipData = equipJson as IEquip[];

describe('`人形装备_防弹插板_M16A1` Equip class', () => {
  const equip = new Equip(equipData.find(({ codename }) => codename === '人形装备_防弹插板_M16A1') as IEquip);
  test('returns Equip class of `人形装备_防弹插板_M16A1`', () => {
    expect(equip).toBeTruthy();
  });
  test('returns name', () => {
    expect(equip.name).toBe('특수 전술기동장갑');
  });
  test('returns introduction', () => {
    expect(equip.introduction).toBe('철혈 공조가 무너지기 전 남겨놓은 장비로, 외골격의 기동장갑이 사용자의 생존능력을 극대화 시켜주지만, 몸과 정신에 심한 부담을 줍니다.');
  });
  test('returns level', () => {
    expect(equip.level).toBe(equip.maxLevel);
  });
  test('throws error when set level to -1', () => {
    expect(() => equip.level = -1).toThrow('`level` must be greater than -1');
  });
  test('throws error when set level to `maxLevel + 1`', () => {
    const { maxLevel } = equip;
    expect(() => equip.level = maxLevel + 1).toThrow(`\`level\` must be less than ${maxLevel + 1}`);
  });
  test('set level to 0', () => {
    equip.level = 0;
    expect(equip.level).toBe(0);
  });
  test('returns stats when level is 0', () => {
    expect(equip.stats).toMatchObject({
      hit: {
        min: -20,
        max: -20,
      },
      dodge: {
        min: 8,
        max: 8,
      },
      rate: {
        min: -10,
        max: -10,
      },
      armor: {
        min: 15,
        max: 15,
      },
    });
  });
});
