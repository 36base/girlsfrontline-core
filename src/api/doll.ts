import dollAttributeJson from '../../data/dollAttribute.json';
import dollGrowJson from '../../data/dollGrow.json';
import { IDollAttribute, IDollGrow, IEffect, IStats } from '../interface';

export function getFavorRatio(favor:number) {
  if (favor < 10) {
    return -0.05;
  }
  if (favor < 90) {
    return 0;
  }
  if (favor < 140) {
    return 0.05;
  }
  if (favor < 190) {
    return 0.1;
  }

  return 0.15;
}

export function getEffect(dollType:string, dummyLink:number, effect:IEffect) {
  if (dollType === 'hg') {
    const gridEffect = { ...effect.gridEffect };
    Object.entries(gridEffect).forEach(([key, value]) => {
      gridEffect[key] = Math.floor(Number(value) * (1 + (0.25 * (dummyLink - 1))));
    });
    return { ...effect, gridEffect: { ...gridEffect } };
  }
  return effect;
}

export function getStats(
  dollType:string, baseStats:IStats, growRatio:number,
  { level = 100, dummyLink = 5, favor = 50, growth = true } = {},
):IStats {
  const { [dollType]: attributeData } = dollAttributeJson as IDollAttribute;
  const { normal, after100 } = dollGrowJson as IDollGrow;

  let basicStats = normal.basic;
  let growStats = normal.grow;
  if (level > 100) {
    basicStats = { ...basicStats, ...after100.basic };
    growStats = { ...growStats, ...after100.grow };
  }

  const stats = { ...baseStats };
  Object.entries(attributeData).forEach(([key, attr]) => {
    const attribute = attr as number;
    const stat = stats[key] || 0;
    const { [key]: basicData = [0, 0] } = basicStats;
    const { [key]: growData } = growStats;

    // 기본 스탯 계산
    let newStat = basicData.length > 1
      ? Math.ceil((basicData[0] + ((level - 1) * basicData[1])) * attribute * stat / 100)
      : Math.ceil(basicData[0] * attribute * stat / 100);

    // 강화 스탯 계산
    newStat += growth === true && growData
      ? Math.ceil((growData[1] + ((level - 1) * growData[0])) * attribute * stat * growRatio / 100 / 100)
      : 0;

    // 호감도 스탯 계산(화력, 명중, 회피 한정)
    newStat += key === 'pow' || key === 'hit' || key === 'dodge'
      ? Math.sign(getFavorRatio(favor)) * Math.ceil(Math.abs(newStat * getFavorRatio(favor)))
      : 0;

    // HP dummyLink 계산
    newStat = key === 'hp'
      ? newStat * dummyLink
      : newStat;

    stats[key] = newStat;
  });

  return stats;
}
