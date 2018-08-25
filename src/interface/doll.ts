import { IBaseStats, IStats } from './base';

export interface ISkill {
  
}

export interface IDollAttribute {
  [key:string]: IStats;
}

interface IDollGrowRate extends IBaseStats {
  [key:string]: number[] | undefined;
}

interface IDollGrowRates {
  basic: IDollGrowRate;
  grow: IDollGrowRate;
}

export interface IDollGrow {
  after100: IDollGrowRates;
  normal: IDollGrowRates;
}

export interface IEffect {
  effectType: string;
  effectCenter: number;
  effectPos: number[];
  gridEffect: IStats;
}

export interface IMindupdate {
  core: number;
  mempiece: number;
}

export interface IDoll {
  id: number;
  name: string;
  rank: number;
  type: string;
  illust: string;
  voice: string;
  buildTime?: number;
  skins: number[];
  stats: IStats;
  effect: IEffect;
  grow: number;
  codename: string;
  skill1: string;
  skill2?: string;
  mindupdate: IMindupdate[];
  obtain: number[];
  equip1: string[];
  equip2: string[];
  equip3: string[];
}
