import fairyGrow from '../../data/fairyGrow.json';
import {getSkillData, getSkill} from './base/skill';

export default function getFairy(fairy) {
  const {skill: skillData} = fairy;
  const skill = getSkillData(skillData);
  
  return {
    ...fairy,
    skill,
    getStats(options = {}) {
      const {level = 100, quality = 5} = options;
      const {stats: baseStats, grow} = fairy;
      const stats = {};
      
      Object.entries(baseStats).forEach(([key, baseStat]) => {
        const {[key]: [statRatio, levelRatio], proportion} = fairyGrow;
        
        stats[key] = Number(Math.ceil((statRatio * (baseStat / 100)) + Math.ceil(((level - 1) * levelRatio) * (baseStat / 100) * (grow / 100))) * proportion[quality - 1]);
      });
      
      return stats;
    },
    getSkill: (options) => getSkill(skill, options),
  };
}
