import skillTemplate from '../../../data/skill.json';

export function getSkill(data) {
  const {skill: skillData} = data;
  const template = skillTemplate.find(({id: dataId}) => dataId === skillData.id);
  
  return {...template, ...skillData};
}

export function getDataPool(dataPool, level) {
  const pool = {};
  Object.entries(dataPool).forEach(([key, values]) => {
    const value = typeof values === 'object'
      ? values[level - 1]
      : values;
    
    pool[key] = value || values[values.length - 1];
  });
  
  return pool;
}

export function getDesc(template, dataPool) {
  let desc = template;
  Object.entries(dataPool).forEach(([key, value]) => {
    desc = desc.replace(new RegExp(`{${key}}`, 'g'), value);
  });
  
  return desc;
}
