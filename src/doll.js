/* eslint-disable lines-between-class-members */
export default class doll {
  constructor(data = {}) {
    this._id = data.id;
    this._name = data.name;
    this._rank = data.rank;
    this._type = data.type;
    this._stats = data.stats;
    this._effect = data.effect;
    // this._skills = data.skills;
  }
  
  get id() { return this._id; }
  
  get name() { return this._name; }
  
  get rank() { return this._rank; }

  get type() { return this._type; }

  get stats() { return this._stats; }

  get effect() { return this._effect; }

  // get skills() { return this._skills; }
  
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      rank: this.rank,
      type: this.type,
      stats: this.stats,
      effect: this.effect,
      // skills: this.skills,
    };
  }
}
