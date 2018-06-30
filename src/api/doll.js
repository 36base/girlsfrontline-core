import dollGrow from '../../data/dollGrow.json';
import dollAttribute from '../../data/dollAttribute.json';
import {getSkillData, getSkill} from './base/skill';

export function getDoll(doll) {
  const {skill: skillData, skill2: skill2Data} = doll;
  const skill = getSkillData(skillData);
  const skill2 = getSkillData(skill2Data);
  
  return {
    ...doll,
    skill,
    skill2,
    getStats: (options) => getStats(doll, options),
    getSkill: (options) => getSkill(skill, options),
    getSkill2: skill2 ? (options) => getSkill(skill2, options) : () => undefined,
  };
}

function getFavorRatio(favor) {
  if (favor < 10) {
    return -0.05;
  } else if (favor < 90) {
    return 0;
  } else if (favor < 140) {
    return 0.05;
  } else if (favor < 190) {
    return 0.1;
  }

  return 0.15;
}

export function getStats({type, stats: baseStats, grow}, {level = 100, favor = 50, isGrow = true} = {}) {
  const {[type]: attribute} = dollAttribute;
  const {normal, after100} = dollGrow;
  
  const basicStats = level > 100 ? {...normal.basic, ...after100.basic} : normal.basic;
  const growStats = level > 100 ? {...normal.grow, ...after100.grow} : normal.grow;
  
  const stats = {...baseStats};
  Object.keys(attribute).forEach((key) => {
    const {[key]: basicData} = basicStats;
    const {[key]: growData} = growStats;
    
    // 기본 스탯 계산
    let stat = basicData.length > 1
      ? Math.ceil((((basicData[0] + ((level - 1) * basicData[1])) * attribute[key]) * baseStats[key]) / 100)
      : Math.ceil(((basicData[0] * attribute[key]) * baseStats[key]) / 100);
    
    // 강화 스탯 계산
    stat += isGrow === true && growData
      ? Math.ceil(((((growData[1] + ((level - 1) * growData[0])) * attribute[key] * baseStats[key]) * grow) / 100) / 100)
      : 0;
      
    // 호감도 스탯 계산
    stat += key === 'pow' || key === 'hit' || key === 'dodge'
      ? Math.sign(getFavorRatio(favor)) * Math.ceil(Math.abs(stat * getFavorRatio(favor)))
      : 0;
      
    stats[key] = stat;
  });
  
  return stats;
}
