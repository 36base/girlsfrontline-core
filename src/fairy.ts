import { getFairyResource, getFairySkins, getFairyStats } from './api/fairy';
import { getSkill } from './api/skill';
import { IFairy, IFairySkin, IFairySkinJson, IPowerup, ISkill, ISkillJson, IStats } from './interface';

export default class Fairy {
  public readonly id: number;
  public readonly category: string;
  public readonly grow: number;
  public readonly buildTime: number;
  public readonly codename: string;
  public readonly powerup: IPowerup;
  public readonly retireExp: number;
  public readonly qualityExp: number[];

  get name():string {
    return getFairyResource(1, this.id);
  }
  get introduce():string {
    return getFairyResource(2, this.id);
  }
  get description():string {
    return getFairyResource(3, this.id);
  }

  private readonly _skill: ISkillJson;
  get skill():ISkill {
    return getSkill(this._skill, { level: this._skillLevel });
  }
  private readonly _stats: IStats;
  get stats():IStats {
    return getFairyStats(this._stats, this.grow, {
      level: this._level,
      qualityLevel: this._qualityLevel,
    });
  }
  private readonly _skins: IFairySkinJson[];
  get skins():IFairySkin[] {
    return getFairySkins(this._skins);
  }

  private _level = 100;
  get level() {
    return this._level;
  }
  set level(level) {
    if (level < 1) {
      throw Error('`level` must be greater than 0');
    }
    if (level > 100) {
      throw Error('`level` must be less than 101');
    }
    this._level = level;
  }
  private _qualityLevel = 5;
  get qualityLevel() {
    return this._qualityLevel;
  }
  set qualityLevel(qualityLevel) {
    if (qualityLevel < 1) {
      throw Error('`qualityLevel` must be greater than 0');
    }
    if (qualityLevel > 5) {
      throw Error('`qualityLevel` must be less than 6');
    }
    this._qualityLevel = qualityLevel;
  }
  private _skillLevel = 10;
  get skillLevel() {
    return this._skillLevel;
  }
  set skillLevel(skillLevel) {
    if (skillLevel < 1) {
      throw Error('`skillLevel` must be greater than 0');
    }
    if (skillLevel > 10) {
      throw Error('`skillLevel` must be less than 11');
    }
    this._skillLevel = skillLevel;
  }

  constructor(fairyJson:IFairy) {
    const fairyData = { ...fairyJson };
    const { id, category, stats, skill, grow, buildTime,
       codename, powerup, retireExp, qualityExp, skins } = fairyData;
    this.id = id;
    this.category = category;
    this._skill = skill;
    this._stats = stats;
    this.grow = grow;
    this.buildTime = buildTime;
    this.codename = codename;
    this.powerup = powerup;
    this.retireExp = retireExp;
    this.qualityExp = qualityExp;
    this._skins = skins;
  }
}
