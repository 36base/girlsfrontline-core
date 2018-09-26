import { getDollEffect, getDollObtain, getDollResource, getDollSkins, getDollStats } from './api/doll';
import { getSkill } from './api/skill';
import { IDoll, IEffect, IMindupdate, IObtain, ISkill, ISkillJson, ISkin, IStats } from './interface';

export default class Doll{
  get name():string {
    return getDollResource(1, this.id);
  }

  get illust():string {
    return getDollResource(4, this.id);
  }

  get voice():string {
    return getDollResource(4, this.id);
  }

  get stats(): IStats {
    return getDollStats(
      this.type, this._stats, this.grow,
      { level: this._level, favor: this._favor },
    );
  }

  get effect(): IEffect {
    return getDollEffect(this.type, this._dummyLink, this._effect);
  }

  get skill1(): ISkill {
    return getSkill(this._skill1, { level: this._skillLevel });
  }

  get skill2(): ISkill|null {
    if (this._skill2) {
      return getSkill(this._skill2, { level: this._skillLevel2 });
    }
    return null;
  }

  get obtain():IObtain[] {
    return getDollObtain(this._obtain);
  }

  get skins():ISkin[] {
    return getDollSkins(this._skins);
  }

  get level(): number {
    return this._level;
  }
  set level(level:number) {
    if (level < 1) {
      throw Error('`level` must be greater than 0');
    }
    this._level = level;
  }

  get favor(): number {
    return this._favor;
  }
  set favor(favor:number) {
    if (favor < 0) {
      throw Error('`favor` must be greater than -1');
    }
    this._favor = favor;
  }

  get dummyLink(): number {
    return this._dummyLink;
  }
  set dummyLink(dummyLink:number) {
    if (dummyLink < 1) {
      throw Error('`dummyLink` must be greater than 0');
    }
    this._dummyLink = dummyLink;
  }

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

  get skillLevel2(): number {
    return this._skillLevel2;
  }
  set skillLevel2(skillLevel2:number) {
    if (skillLevel2 < 1) {
      throw Error('`skillLevel2` must be greater than 0');
    }
    if (skillLevel2 > 10) {
      throw Error('`skillLevel2` must be less than 11');
    }
    this._skillLevel2 = skillLevel2;
  }

  public static isMod(id:number):boolean {
    return id > 20000;
  }

  public readonly id: number;
  public readonly rank: number;
  public readonly type: string;
  public readonly buildTime: number;
  public readonly grow: number;
  public readonly codename: string;
  public readonly mindupdate: IMindupdate[];
  public readonly equip1: string[];
  public readonly equip2: string[];
  public readonly equip3: string[];

  private readonly _stats: IStats;
  private readonly _effect: IEffect;
  private readonly _skill1: ISkillJson;
  private readonly _skill2?: ISkillJson;
  private readonly _obtain: number[];
  private readonly _skins: number[];

  private _level:number = 100;
  private _favor:number = 50;
  private _dummyLink:number = 5;
  private _skillLevel: number = 10;
  private _skillLevel2: number = 10;

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

  public toJSON() {
    return {
      id: this.id,
      rank: this.rank,
      type: this.type,
      buildTime: this.buildTime,
      stats: this._stats,
      effect: this._effect,
      grow: this.grow,
      codename: this.codename,
      skill1: this._skill1,
      skill2: this._skill2,
      mindupdate: this.mindupdate,
      obtain: this._obtain,
      skins: this._skins,
      equip1: this.equip1,
      equip2: this.equip2,
      equip3: this.equip3,
    };
  }
}
