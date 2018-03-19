import fairyGrow from '../../data/fairyGrow.json';

function getFairy(fairy) {
  return {
    ...fairy,
    getStats(options = {}) {
      const {level = 100, quality = 5} = options;
      const {stats: baseStats, grow} = fairy;
      const stats = {};
      
      Object.keys(baseStats).forEach((key) => {
        const {[key]: baseStat} = baseStats;
        const {[key]: [statRatio, levelRatio], proportion} = fairyGrow;
        
        stats[key] = Number(Number(Math.ceil((statRatio * (baseStat / 100)) + Math.ceil(((level - 1) * levelRatio) * (baseStat / 100) * (grow / 100)))) * proportion[quality - 1]);
      });
      
      return stats;
    },
  };
}

export default getFairy;
