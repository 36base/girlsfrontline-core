import { IPowerup, IStats } from './base';

export interface IFairy {
  id: number;
  category: string;
  name: string;
  stats: IStats;
  skill: string;
  grow: number;
  buildTime: number;
  codename: string;
  powerup: IPowerup;
  retireExp: number;
  qualityExp: number[];
}
