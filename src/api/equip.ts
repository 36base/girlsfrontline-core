import { IEquipStats } from '../interface';

export function getEquipStats(stats:IEquipStats, { level = 0 } = {}):IEquipStats {
  const calc = (stat:number, upgrade:number) => Math.floor(stat * (10000 + level * upgrade) / 10000);

  const newStats:IEquipStats = {};
  Object.entries(stats).forEach(([key, value]) => {
    const { min, max, upgrade = 0 } = value;
    newStats[key] = {
      min: calc(min, upgrade),
      max: calc(max, upgrade),
    };
  });
  return newStats;
}

export function getEquipResource(resourceId:number, equipId:string|number) {
  const padId = String(equipId).padStart(7, '0');
  return `equip-${resourceId}${padId}`;
}
