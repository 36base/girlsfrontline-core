import dollJson from '../../data/doll.json';
import fairyJson from '../../data/fairy.json';
import { IDoll, IFairy, ISkill } from '../interface';
import { getSkill, getSkillResource, SkillType } from './skill';

const dollData = dollJson as IDoll[];
const fairyData = fairyJson as IFairy[];

describe('`getSkill()`', () => {
  const M1873 = dollData.find(({ codename }) => codename === 'M1873') as IDoll;
  // tslint:disable-next-line:variable-name
  const Kaguya = fairyData.find(({ codename }) => codename === 'Kaguya') as IFairy;
  test('returns skill1 object of M1873', () => {
    const skill1:ISkill = getSkill(M1873.skill1);
    /* tslint:disable object-literal-key-quotes*/
    expect(skill1).toMatchObject({
      name: '일제사격',
      description: '아군 전체 화력을 22% 상승시킨다. 지속시간 8초',
      cooldown: 12,
      cooldownType: 'second',
      detail: {
        '쿨타임': '12초',
        '화력 상승치': '22%',
        '지속시간': '8초',
      },
    });
    /* tslint:enable object-literal-key-quotes*/
  });
  test('returns skill1 object of M1873 when `level` is 7', () => {
    const skill1:ISkill = getSkill(M1873.skill1, { level: 7 });
    /* tslint:disable object-literal-key-quotes*/
    expect(skill1).toMatchObject({
      name: '일제사격',
      description: '아군 전체 화력을 18% 상승시킨다. 지속시간 7초',
      cooldown: 13,
      cooldownType: 'second',
      detail: {
        '쿨타임': '13초',
        '화력 상승치': '18%',
        '지속시간': '7초',
      },
    });
    /* tslint:enable object-literal-key-quotes*/
  });
  test('returns skill object of Kaguya', () => {
    const skill:ISkill = getSkill(Kaguya.skill);
    /* tslint:disable object-literal-key-quotes*/
    expect(skill).toMatchObject({
      name: '야타의 휘광',
      description: '자신 주위 범위 2구역에 야타의 거울을 배치하고 레이저를 발사하여, 구역 내의 무작위 3기의 적에게 현재 체력의 20%의 피해를 입힌다.(보스 무효)',
      cooldown: 3,
      cooldownType: 'turn',
      detail: {
        '피해량': '20%',
      },
    });
    /* tslint:enable object-literal-key-quotes*/
  });
  test('returns skill object of Kaguya when `level` is 1', () => {
    const skill:ISkill = getSkill(Kaguya.skill, { level: 1 });
    /* tslint:disable object-literal-key-quotes*/
    expect(skill).toMatchObject({
      name: '야타의 휘광',
      description: '자신 주위 범위 2구역에 야타의 거울을 배치하고 레이저를 발사하여, 구역 내의 무작위 3기의 적에게 현재 체력의 10%의 피해를 입힌다.(보스 무효)',
      cooldown: 3,
      cooldownType: 'turn',
      detail: {
        '피해량': '10%',
      },
    });
    /* tslint:enable object-literal-key-quotes*/
  });
});
