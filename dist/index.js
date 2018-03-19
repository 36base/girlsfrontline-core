'use strict';

var _doll = require('../data/doll.json');

var _doll2 = _interopRequireDefault(_doll);

var _equip = require('../data/equip.json');

var _equip2 = _interopRequireDefault(_equip);

var _skill = require('../data/skill.json');

var _skill2 = _interopRequireDefault(_skill);

var _fairy = require('../data/fairy.json');

var _fairy2 = _interopRequireDefault(_fairy);

var _fairy3 = require('./api/fairy');

var _fairy4 = _interopRequireDefault(_fairy3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fairy = _fairy2.default.map(function (data) {
  return (0, _fairy4.default)(data);
});

module.exports = { dolls: _doll2.default, equips: _equip2.default, skills: _skill2.default, fairy: fairy };