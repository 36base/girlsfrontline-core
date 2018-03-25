"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = require("babel-runtime/core-js/object/entries");

var _entries2 = _interopRequireDefault(_entries);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

exports.default = getEquip;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getEquip(equip) {
  return (0, _extends3.default)({}, equip, {
    getStats: function getStats() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _options$level = options.level,
          level = _options$level === undefined ? 10 : _options$level;
      var baseStats = equip.stats;


      var stats = {};
      (0, _entries2.default)(baseStats).forEach(function (_ref) {
        var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
            key = _ref2[0],
            _ref2$ = _ref2[1],
            min = _ref2$.min,
            max = _ref2$.max,
            upgrade = _ref2$.upgrade;

        stats[key] = {
          min: getStat(level, min, upgrade),
          max: getStat(level, max, upgrade)
        };
      });

      return stats;
    }
  });
}

function getStat(level, value, upgrade) {
  return value + value * upgrade * level / 100;
}