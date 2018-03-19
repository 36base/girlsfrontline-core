'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = getDoll;

var _skill = require('../../data/skill.json');

var _skill2 = _interopRequireDefault(_skill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getDoll(doll) {
  var skillData = doll.skill;

  var template = _skill2.default.find(function (_ref) {
    var dataId = _ref.id;
    return dataId === skillData.id;
  });
  var skill = (0, _extends3.default)({}, template, skillData);

  return (0, _extends3.default)({}, doll, {
    skill: skill,
    getSkill: function getSkill() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _options$level = options.level,
          level = _options$level === undefined ? 10 : _options$level,
          _options$night = options.night,
          isNight = _options$night === undefined ? true : _options$night;
      var name = skill.name,
          pool = skill.dataPool,
          nightPool = skill.nightDataPool,
          nightData = skill.night,
          dayDesc = skill.desc;


      var dataPool = isNight ? getDataPool((0, _extends3.default)({}, pool, nightPool), level) : getDataPool(pool, level);
      var desc = isNight && nightData ? getDesc(nightData.desc, dataPool) : getDesc(dayDesc, dataPool);

      return (0, _extends3.default)({}, skill, isNight ? nightData : {}, {
        dataPool: dataPool,
        desc: desc,
        name: name
      });
    }
  });
}

function getDataPool(dataPool, level) {
  var pool = {};
  (0, _entries2.default)(dataPool).forEach(function (_ref2) {
    var _ref3 = (0, _slicedToArray3.default)(_ref2, 2),
        key = _ref3[0],
        values = _ref3[1];

    var value = (typeof values === 'undefined' ? 'undefined' : (0, _typeof3.default)(values)) === 'object' ? values[level - 1] : values;

    pool[key] = value || values[values.length - 1];
  });

  return pool;
}

function getDesc(template, dataPool) {
  var desc = template;
  (0, _entries2.default)(dataPool).forEach(function (_ref4) {
    var _ref5 = (0, _slicedToArray3.default)(_ref4, 2),
        key = _ref5[0],
        value = _ref5[1];

    desc = desc.replace(new RegExp('{' + key + '}', 'g'), value);
  });

  return desc;
}