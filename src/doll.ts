import { getSkinResource, SkinType } from './api/base';
import { getDollEffect, getDollObtain, getDollResource, getDollSkins, getDollStats } from './api/doll';
import { getSkill } from './api/skill';
import { IDoll, IEffect, IMindupdate, IObtain, ISkill, ISkillJson, ISkin, IStats } from './interface';

export default class Doll{
  public readonly id: number;
  public readonly rank: number;
  public readonly type: string;
  public readonly buildTime?: number;
  public readonly grow: number;
  public readonly codename: string;
  public readonly mindupdate: IMindupdate[];
  public readonly equip1: string[];
  public readonly equip2: string[];
  public readonly equip3: string[];

  get name():string {
    return getDollResource(1, this.id);
  }
  get illust():string {
    return getDollResource(4, this.id).split(',')[0];
  }
  get voice():string {
    return getDollResource(4, this.id).split(',')[1];
  }

  private readonly _stats: IStats;
  get stats(): IStats {
    return getDollStats(
      this.type, this._stats, this.grow,
      { level: this._level, favor: this._favor },
    );
  }
  private readonly _effect: IEffect;
  get effect(): IEffect {
    return getDollEffect(this.type, this._dummyLink, this._effect);
  }
  private readonly _skill1: ISkillJson;
  get skill1(): ISkill {
    return getSkill(this._skill1, { level: this._skillLevel });
  }
  private readonly _skill2?: ISkillJson;
  get skill2(): ISkill|null {
    if (this._skill2) {
      return getSkill(this._skill2, { level: this._skillLevel });
    }
    return null;
  }
  private readonly _obtain: number[];
  get obtain():IObtain[] {
    return getDollObtain(this._obtain);
  }
  private readonly _skins: number[];
  get skins():ISkin[] {
    return getDollSkins(this._skins);
  }

  private _level:number = 100;
  get level(): number {
    return this._level;
  }
  set level(level:number) {
    if (level < 1) {
      throw Error('`level` must be greater than 0');
    }
    if (level > 120) {
      throw Error('`level` must be less than 121');
    }
    this._level = level;
  }
  private _favor:number = 50;
  get favor(): number {
    return this._favor;
  }
  set favor(favor:number) {
    if (favor < 1) {
      throw Error('`favor` must be greater than 0');
    }
    this._favor = favor;
  }
  private _dummyLink:number = 5;
  get dummyLink(): number {
    return this._dummyLink;
  }
  set dummyLink(dummyLink:number) {
    if (dummyLink < 1) {
      throw Error('`dummyLink` must be greater than 0');
    }
    if (dummyLink > 5) {
      throw Error('`dummyLink` must be less than 6');
    }
    this._dummyLink = dummyLink;
  }
  private _skillLevel: number = 10;
  get skillLevel(): number {
    return this._skillLevel;
  }
  set skillLevel(skillLevel:number) {
    if (skillLevel < 1) {
      throw Error('`skillLevel` must be greater than 0');
    }
    if (skillLevel > 10) {
      throw Error('`skillLevel` must be less than 11');
    }
    this._skillLevel = skillLevel;
  }

  constructor(dollJson:IDoll) {
    const { id, rank, type,
      buildTime, skins, stats, effect, grow, codename,
      skill1, skill2, mindupdate, obtain, equip1, equip2, equip3 } = dollJson;
    if (id > 20000) {
      this._level = 120;
    }
    this.id = id;
    this.rank = rank;
    this.type = type;
    this.buildTime = buildTime;
    this._stats = stats;
    this._effect = effect;
    this.grow = grow;
    this.codename = codename;
    this._skill1 = skill1;
    this._skill2 = skill2;
    this.mindupdate = mindupdate;
    this._obtain = obtain;
    this._skins = skins;
    this.equip1 = equip1;
    this.equip2 = equip2;
    this.equip3 = equip3;
  }
}
