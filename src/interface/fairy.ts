import { IPowerup, ISkillJson, IStats } from './base';

export interface IFairy {
  id: number;
  category: string;
  stats: IStats;
  skill: ISkillJson;
  grow: number;
  buildTime: number;
  codename: string;
  powerup: IPowerup;
  retireExp: number;
  qualityExp: number[];
}
