import fairyGrowJson from '../../data/fairyGrow.json';
import { IPowerup, ISkillJson, IStats } from './base';

export interface IFairyGrow {
  [key:string]: number[];
  armor: [number, number];
  criticalHarmRate: [number, number];
  dodge: [number, number];
  hit: [number, number];
  pow: [number, number];
  proportion: [number, number, number, number, number];
}

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
  skins: number[];
}
