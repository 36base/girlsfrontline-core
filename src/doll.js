/* eslint-disable lines-between-class-members */
export default class doll {
  constructor(data = {}) {
    this._id = data.id;
    this._codeName = data.codeName;
    this._rank = data.rank;
    this._type = data.type;
    this._stats = data.stats;
    this._gridPos = data.gridPos;
    this._equip = data.equip;
    this._effect = data.effect;
    this._skills = data.skills;
    
    this.level = 1;
    this.dummyLink = 1;
  }
  
  get id() { return this._id; }
  
  get codeName() { return this._codeName; }
  
  get rank() { return this._rank; }

  get level() { return this._level; }
  set level(val) {
    if (val > 0) {
      this._level = val;
    } else {
      throw new Error('level must be greater than 0');
    }
  }

  get dummyLink() { return this._dummyLink; }
  set dummyLink(val) {
    const dummyLevel = [0, 10, 30, 70, 90];
    if (this.level >= dummyLevel[val - 1]) {
      this._dummyLink = val;
    } else {
      throw new Error(`level must be at least ${dummyLevel[val - 1]}`);
    }
  }

  get type() { return this._type; }

  get stats() { return this._stats; }

  get gridPos() { return this._gridPos; }

  get equip() { return this._equip; }

  get effect() { return this._effect; }

  get skills() { return this._skills; }
  
  toJSON() {
    return {
      id: this.id,
      codeName: this.codeName,
      rank: this.rank,
      type: this.type,
      stats: this.stats,
      gridPos: this.gridPos,
      equip: this.equip,
      effect: this.effect,
      skills: this.skills,
    };
  }
}
