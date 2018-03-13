'use strict';

var _doll = require('../data/doll.json');

var _doll2 = _interopRequireDefault(_doll);

var _equip = require('../data/equip.json');

var _equip2 = _interopRequireDefault(_equip);

var _skill = require('../data/skill.json');
var _skill2 = _interopRequireDefault(_skill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = { dolls: _doll2.default, equips: _equip2.default, skills: _skill2.default };