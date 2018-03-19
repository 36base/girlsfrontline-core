import skillTemplate from '../../data/skill.json';

export default function getDoll(doll) {
  const {skill: skillData} = doll;
  const template = skillTemplate.find(({id: dataId}) => dataId === skillData.id);
  const skill = {...template, ...skillData};
  
  return {
    ...doll,
    skill,
    getSkill(options = {}) {
      const {level = 10, night: isNight = true} = options;
      const {name, dataPool: pool, nightDataPool: nightPool, night: nightData, desc: dayDesc} = skill;
      
      const dataPool = isNight
        ? getDataPool({...pool, ...nightPool}, level)
        : getDataPool(pool, level);
      const desc = isNight && nightData
        ? getDesc(nightData.desc, dataPool)
        : getDesc(dayDesc, dataPool);
      
      return {
        ...skill,
        ...isNight ? nightData : {},
        dataPool,
        desc,
        name,
      };
    },
  };
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
