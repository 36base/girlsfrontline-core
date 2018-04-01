'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sign = require('babel-runtime/core-js/math/sign');

var _sign2 = _interopRequireDefault(_sign);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = getDoll;

var _dollGrow = require('../../data/dollGrow.json');

var _dollGrow2 = _interopRequireDefault(_dollGrow);

var _dollAttribute = require('../../data/dollAttribute.json');

var _dollAttribute2 = _interopRequireDefault(_dollAttribute);

var _skill = require('./base/skill');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getDoll(doll) {
  var skill = (0, _skill.getSkill)(doll);

  return (0, _extends3.default)({}, doll, {
    skill: skill,
    getStats: function getStats() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _options$level = options.level,
          level = _options$level === undefined ? 100 : _options$level,
          _options$favor = options.favor,
          favor = _options$favor === undefined ? 50 : _options$favor;
      var type = doll.type,
          baseStats = doll.stats,
          grow = doll.grow;
      var attribute = _dollAttribute2.default[type];
      var normal = _dollGrow2.default.normal,
          after100 = _dollGrow2.default.after100;


      var basicStats = level > 100 ? (0, _extends3.default)({}, normal.basic, after100.basic) : normal.basic;
      var growStats = level > 100 ? (0, _extends3.default)({}, normal.grow, after100.grow) : normal.grow;

      var stats = (0, _extends3.default)({}, baseStats);
      (0, _keys2.default)(attribute).forEach(function (key) {
        var basicData = basicStats[key];
        var growData = growStats[key];

        // 기본 스탯 계산

        var stat = basicData.length > 1 ? Math.ceil((basicData[0] + (level - 1) * basicData[1]) * attribute[key] * baseStats[key] / 100) : Math.ceil(basicData[0] * attribute[key] * baseStats[key] / 100);

        // 강화 스탯 계산
        stat += growData ? Math.ceil((growData[1] + (level - 1) * growData[0]) * attribute[key] * baseStats[key] * grow / 100 / 100) : 0;

        // 호감도 스탯 계산
        stat += key === 'pow' || key === 'hit' || key === 'dodge' ? (0, _sign2.default)(getFavorRatio(favor)) * Math.ceil(Math.abs(stat * getFavorRatio(favor))) : 0;

        stats[key] = stat;
      });

      return stats;
    },
    getSkill: function getSkill() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _options$level2 = options.level,
          level = _options$level2 === undefined ? 10 : _options$level2,
          _options$night = options.night,
          isNight = _options$night === undefined ? true : _options$night;
      var id = skill.id,
          path = skill.path,
          data = skill.data,
          name = skill.name,
          pool = skill.dataPool,
          nightPool = skill.nightDataPool,
          nightData = skill.night,
          dayDesc = skill.desc;


      var dataPool = isNight ? (0, _skill.getDataPool)((0, _extends3.default)({}, pool, nightPool), level) : (0, _skill.getDataPool)(pool, level);
      var desc = isNight && nightData ? (0, _skill.getDesc)(nightData.desc, dataPool) : (0, _skill.getDesc)(dayDesc, dataPool);

      return (0, _extends3.default)({
        id: id,
        path: path,
        data: data
      }, isNight ? nightData : {}, {
        dataPool: dataPool,
        desc: desc,
        name: name
      });
    }
  });
}

function getFavorRatio(favor) {
  if (favor < 10) {
    return -0.05;
  } else if (favor < 90) {
    return 0;
  } else if (favor < 140) {
    return 0.05;
  }

  return 0.1;
}