import fairyGrowJson from '../../data/fairyGrow.json';
import i18next from '../i18next';
import { IFairyGrow, IStats } from '../interface';

const fairyGrow = fairyGrowJson as IFairyGrow;

export function getFairyStats(
  baseStats:IStats, growRatio:number, { level = 100, qualityLevel = 5 } = {},
):IStats {
  const stats:IStats = {};
  Object.entries(baseStats).forEach(([key, value = 0]) => {
    const { [key]: [statRatio, levelRatio], proportion } = fairyGrow;

    // 기본 계산
    let stat = (Math.ceil(statRatio * value / 100)
    + Math.ceil((level - 1) * levelRatio * value / 100 * growRatio / 100));

    // 등급별 가중치
    stat = stat * proportion[qualityLevel - 1];

    stats[key] = stat;
  });

  return stats;
}

export function getFairyResource(resourceId:number, fairyId:string|number) {
  const padId = String(fairyId).padStart(7, '0');
  return i18next.t(`fairy-${resourceId}${padId}`);
}
