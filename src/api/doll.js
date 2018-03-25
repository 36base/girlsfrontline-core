import skillTemplate from '../../data/skill.json';
import dollGrow from '../../data/dollGrow.json';
import dollAttribute from '../../data/dollAttribute.json';

export default function getDoll(doll) {
  const {skill: skillData} = doll;
  const template = skillTemplate.find(({id: dataId}) => dataId === skillData.id);
  const skill = {...template, ...skillData};
  
  return {
    ...doll,
    skill,
    getStats(options = {}) {
      const {level = 100, favor = 50} = options;
      const {type, stats: baseStats, grow} = doll;
      
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
        stat += growData
          ? Math.ceil(((((growData[1] + ((level - 1) * growData[0])) * attribute[key] * baseStats[key]) * grow) / 100) / 100)
          : 0;
          
        // 호감도 스탯 계산
        stat += key === 'pow' || key === 'hit' || key === 'dodge'
          ? Math.sign(getFavorRatio(favor)) * Math.ceil(Math.abs(stat * getFavorRatio(favor)))
          : 0;
          
        stats[key] = stat;
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

function getFavorRatio(favor) {
  if (favor < 10) {
    return -0.05;
  } else if (favor < 90) {
    return 0;
  } else if (favor < 140) {
    return 0.05;
  }

  return 0.1;
}

function getDataPool(dataPool, level) {
  const pool = {};
  Object.entries(dataPool).forEach(([key, values]) => {
    const value = typeof values === 'object'
      ? values[level - 1]
      : values;
    
    pool[key] = value || values[values.length - 1];
  });
  
  return pool;
}

function getDesc(template, dataPool) {
  let desc = template;
  Object.entries(dataPool).forEach(([key, value]) => {
    desc = desc.replace(new RegExp(`{${key}}`, 'g'), value);
  });
  
  return desc;
}
