import { IPowerup, ISkill, IStats } from './base';

export interface IFairy {
  id: number;
  category: string;
  stats: IStats;
  skill: ISkill;
  grow: number;
  buildTime: number;
  codename: string;
  powerup: IPowerup;
  retireExp: number;
  qualityExp: number[];
}
