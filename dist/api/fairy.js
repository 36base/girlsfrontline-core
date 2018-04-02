'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = getFairy;

var _fairyGrow = require('../../data/fairyGrow.json');

var _fairyGrow2 = _interopRequireDefault(_fairyGrow);

var _skill = require('./base/skill');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getFairy(fairy) {
  var skill = (0, _skill.getSkill)(fairy);

  return (0, _extends3.default)({}, fairy, {
    skill: skill,
    getStats: function getStats() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _options$level = options.level,
          level = _options$level === undefined ? 100 : _options$level,
          _options$quality = options.quality,
          quality = _options$quality === undefined ? 5 : _options$quality;
      var baseStats = fairy.stats,
          grow = fairy.grow;

      var stats = {};

      (0, _entries2.default)(baseStats).forEach(function (_ref) {
        var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
            key = _ref2[0],
            baseStat = _ref2[1];

        var _fairyGrow$key = (0, _slicedToArray3.default)(_fairyGrow2.default[key], 2),
            statRatio = _fairyGrow$key[0],
            levelRatio = _fairyGrow$key[1],
            proportion = _fairyGrow2.default.proportion;

        stats[key] = Number(Math.ceil(statRatio * (baseStat / 100) + Math.ceil((level - 1) * levelRatio * (baseStat / 100) * (grow / 100))) * proportion[quality - 1]);
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