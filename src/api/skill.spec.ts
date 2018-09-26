import dollJson from '../../data/doll.json';
import fairyJson from '../../data/fairy.json';
import { IDoll, IFairy, ISkill } from '../interface';
import { getSkill } from './skill';

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
      name: 'battle_skill_config-110050310',
      description: 'battle_skill_config-210050310',
      cooldown: 360,
      cooldownType: 'frame',
      detail: 'battle_skill_config-310050310',
    });
    /* tslint:enable object-literal-key-quotes*/
  });
  test('returns skill1 object of M1873 when `level` is 7', () => {
    const skill1:ISkill = getSkill(M1873.skill1, { level: 7 });
    /* tslint:disable object-literal-key-quotes*/
    expect(skill1).toMatchObject({
      name: 'battle_skill_config-110050307',
      description: 'battle_skill_config-210050307',
      cooldown: 390,
      cooldownType: 'frame',
      detail: 'battle_skill_config-310050307',
    });
    /* tslint:enable object-literal-key-quotes*/
  });
  test('returns skill object of Kaguya', () => {
    const skill:ISkill = getSkill(Kaguya.skill);
    /* tslint:disable object-literal-key-quotes*/
    expect(skill).toMatchObject({
      name: 'mission_skill_config-10100210',
      description: 'mission_skill_config-20100210',
      cooldown: 3,
      cooldownType: 'turn',
      detail: 'mission_skill_config-30100210',
    });
    /* tslint:enable object-literal-key-quotes*/
  });
  test('returns skill object of Kaguya when `level` is 1', () => {
    const skill:ISkill = getSkill(Kaguya.skill, { level: 1 });
    /* tslint:disable object-literal-key-quotes*/
    expect(skill).toMatchObject({
      name: 'mission_skill_config-10100201',
      description: 'mission_skill_config-20100201',
      cooldown: 3,
      cooldownType: 'turn',
      detail: 'mission_skill_config-30100201',
    });
    /* tslint:enable object-literal-key-quotes*/
  });
});
