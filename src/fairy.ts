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
  public readonly name: string;
  public readonly introduce: string;
  public readonly description: string;
  public readonly skins: IFairySkin[];

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

  private _level = 100;
  get level() {
    return this._level;
  }
  set level(level) {
    if (level < 1) {
      throw Error('`level` must be greater than 0');
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
    this.name = getFairyResource(1, id);
    this.introduce = getFairyResource(2, id);
    this.description = getFairyResource(3, id);
    this.skins = getFairySkins(skins);
  }

  public toJSON():IFairy {
    return {
      id : this.id,
      category : this.category,
      skill : this._skill,
      stats : this._stats,
      grow : this.grow,
      buildTime : this.buildTime,
      codename : this.codename,
      powerup : this.powerup,
      retireExp : this.retireExp,
      qualityExp : this.qualityExp,
      skins : this.skins.map(({ id, codename }) => ({ id, codename })),
    };
  }
}
