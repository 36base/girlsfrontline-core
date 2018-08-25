/* tslint:disable variable-name */
import dollAttributeJson from '../data/dollAttribute.json';
import dollGrowJson from '../data/dollGrow.json';
import { IDoll, IDollAttribute, IDollGrow, IEffect, ILocale, IMindupdate, IStats } from './interface';

export function getFavorRatio(favor:number) {
  if (favor < 10) {
    return -0.05;
  }
  if (favor < 90) {
    return 0;
  }
  if (favor < 140) {
    return 0.05;
  }
  if (favor < 190) {
    return 0.1;
  }

  return 0.15;
}

export function getStats(
  dollType:string, baseStats:IStats, growRatio:number,
  { level = 100, favor = 50, growth = true } = {},
):IStats {
  const { [dollType]: attributeData } = dollAttributeJson as IDollAttribute;
  const { normal, after100 } = dollGrowJson as IDollGrow;

  let basicStats = normal.basic;
  let growStats = normal.grow;
  if (level > 100) {
    basicStats = { ...basicStats, ...after100.basic };
    growStats = { ...growStats, ...after100.grow };
  }

  const stats = baseStats;
  Object.entries(attributeData).forEach(([key, attribute = 0]) => {
    const stat = baseStats[key] || 0;
    const { [key]: basicData = [0, 0] } = basicStats;
    const { [key]: growData = [0, 0] } = growStats;

    // 기본 스탯 계산
    let newStat = basicData.length > 1
      ? Math.ceil((basicData[0] + ((level - 1) * basicData[1])) * attribute * stat / 100)
      : Math.ceil(basicData[0] * attribute * stat / 100);

    // 강화 스탯 계산
    newStat += growth === true && growData
      ? Math.ceil((growData[1] + ((level - 1) * growData[0])) * attribute * stat * growRatio / 100 / 100)
      : 0;

    // 호감도 스탯 계산(화력, 명중, 회피 한정)
    newStat += key === 'pow' || key === 'hit' || key === 'dodge'
      ? Math.sign(getFavorRatio(favor)) * Math.ceil(Math.abs(newStat * getFavorRatio(favor)))
      : 0;

    stats[key] = newStat;
  });

  return stats;
}

export function getEffect(dollType:string, dummyLink:number, effect:IEffect) {
  if(dollType === 'hg') {
    const newEffect = {...effect};
    const {gridEffect} = newEffect;

    Object.entries(gridEffect).forEach(([key, value]) => {
      newEffect.gridEffect[key] = Math.floor((value as number) * (1 + (0.25 * dummyLink)));
    });
    return newEffect;
  }
  return effect;
}

export class Doll{
  public static locale:ILocale;
  public readonly id: number;
  public readonly name: string;
  public readonly rank: number;
  public readonly type: string;
  public readonly illust: string;
  public readonly voice: string;
  public readonly buildTime?: number;
  public readonly skins: number[];
  public readonly grow: number;
  public readonly codename: string;
  public readonly mindupdate: IMindupdate[];
  public readonly obtain: number[];
  public readonly equip1: string[];
  public readonly equip2: string[];
  public readonly equip3: string[];

  private readonly _stats: IStats;
  get stats(): IStats {
    return getStats(
      this.type, this._stats, this.grow,
      { level: this._level, favor: this._favor },
    );
  }
  private readonly _effect: IEffect;
  get effect(): IEffect {
    return getEffect(this.type, this._dummyLink, this._effect);
  }
  private readonly _skill1: string;
  get skill1(): string {
    return '';
  }
  private readonly _skill2?: string;

  private _level:number = 100;
  private _favor:number = 50;
  private _dummyLink:number = 5;
  private _skillLevel: number = 10;

  constructor(dollJson:IDoll) {
    const { id, name, rank, type, illust, voice,
      buildTime, skins, stats, effect, grow, codename,
      skill1, skill2, mindupdate, obtain, equip1, equip2, equip3 } = dollJson;
    this.id = id;
    this.name = name;
    this.rank = rank;
    this.type = type;
    this.illust = illust;
    this.voice = voice;
    this.buildTime = buildTime;
    this.skins = skins;
    this._stats = stats;
    this._effect = effect;
    this.grow = grow;
    this.codename = codename;
    this._skill1 = skill1;
    this._skill2 = skill2;
    this.mindupdate = mindupdate;
    this.obtain = obtain;
    this.equip1 = equip1;
    this.equip2 = equip2;
    this.equip3 = equip3;
  }
}
