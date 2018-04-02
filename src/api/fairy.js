import fairyGrow from '../../data/fairyGrow.json';
import {getSkill, getDataPool, getDesc} from './base/skill';

export default function getFairy(fairy) {
  const skill = getSkill(fairy);
  
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
    getSkill(options = {}) {
      const {level = 10, night: isNight = true} = options;
      const {id, path, data, name, dataPool: pool, nightDataPool: nightPool, night: nightData, desc: dayDesc} = skill;
      
      const dataPool = isNight
        ? getDataPool({...pool, ...nightPool}, level)
        : getDataPool(pool, level);
      const desc = isNight && nightData
        ? getDesc(nightData.desc, dataPool)
        : getDesc(dayDesc, dataPool);
      
      return {
        id,
        path,
        data,
        ...isNight ? nightData : {},
        dataPool,
        desc,
        name,
      };
    },
  };
}
