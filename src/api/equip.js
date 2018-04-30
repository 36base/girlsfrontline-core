export default function getEquip(equip) {
  return {
    ...equip,
    getStats(options = {}) {
      const {level = 10} = options;
      const {stats: baseStats} = equip;
      
      const stats = {};
      Object.entries(baseStats).forEach(([key, {min, max, upgrade}]) => {
        stats[key] = {
          min: getStat(level, min, upgrade),
          max: getStat(level, max, upgrade),
        };
      });
      
      return stats;
    },
  };
}

function getStat(level, value, upgrade) {
  return value + (value * upgrade * level / 100);
}
