export interface ILocale {
  [key:string]: string;
}

export interface IBaseStats {
  [key:string]: any|undefined;
  hp?: any;
  pow?: any;
  hit?: any;
  dodge?: any;
  speed?: any;
  rate?: any;
  criticalHarmRate?: any;
  criticalPercent?: any;
  cooldown?: any;
  armorPiercing?: any;
  armor?: any;
  bullet?: any;
}

export interface IStats extends IBaseStats {
  [key:string]: number|undefined;
}

export interface IPowerup {
  mp: number;
  ammo: number;
  mre: number;
  part: number;
}

export interface ISkill {
  id: string;
  codeName: string;
  cooldownType: string;
  initialCooldown: number;
  dataPool: IDataPool[];
}

export interface IDataPool {
  level: number;
  cooldown: number;
}
