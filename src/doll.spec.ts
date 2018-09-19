import dollJson from '../data/doll.json';
import Doll from './doll';
import { init } from './index';
import { IDoll } from './interface';

const dollData = dollJson as IDoll[];
beforeAll(() => {
  return init();
});

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
    expect(CLEAR.name).toBe('클리어');
  });
  test('returns illustrator', () => {
    expect(CLEAR.illust).toBe('水熊');
  });
  test('returns voice actor', () => {
    expect(CLEAR.voice).toBe('');
  });
  test('returns skin', () => {
    expect(CLEAR.skins).toMatchObject([{
      id: 509,
      name: '포터블 여왕 2세',
    }]);
  });
  test('returns obatin', () => {
    expect(CLEAR.obtain).toMatchObject([
      { description: '기간한정 이벤트【Glory Day】2-3클리어 보상', id: 206 },
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
      description: '공격을 멈추고 다섯 차례 연주한다, 매 연주는 무작위 아군 하나의 화력과 명중을 25%(Glory Light 장착시 33%) 상승시킨다, 중첩 불가, 연주당 지속시간 각 3초.',
      detail: {
        '명중 상승치': '25%',
        // tslint:disable-next-line:object-literal-key-quotes
        '쿨타임': '8.7초',
        '화력 상승치': '25%',
      },
      id: '109401',
      initialCooldown: 180,
      name: '"조금 더 완벽하게!"',
    });
  });
  test('skill2 must be null', () => {
    expect(CLEAR.skill2).toBe(null);
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
      description: '화력전개 발동 시, 지속시간 동안 타깃에게 설한의 쐐기를 부여한다. 전투 중 자신을 포함한 아군이 3기 이하일 경우, 공격속도가 70% 감소하는 대신, 사격 시, 타깃' +
      '에게 공격력의 600%의 대미지를 입히며 2.5범위의 적들에게 쐐기를 부여하고 공격력의 100%의 대미지를 입힌다.',
      detail: {
        '포격 대미지': '600%',
      },
      id: '801108',
      initialCooldown: 0,
      name: '설한의 쐐기',
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
      { description: '【일반6-6】또는【긴급6-4】에서', id: 18 },
      { description: '보스전 S 승리 OR 전역 S 클리어로 획득 가능', id: 19 },
    ]);
  });
});
