'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _doll = require('../data/doll.json');

var _doll2 = _interopRequireDefault(_doll);

var _equip = require('../data/equip.json');

var _equip2 = _interopRequireDefault(_equip);

var _fairy = require('../data/fairy.json');

var _fairy2 = _interopRequireDefault(_fairy);

var _doll3 = require('./api/doll');

var _doll4 = _interopRequireDefault(_doll3);

var _fairy3 = require('./api/fairy');

var _fairy4 = _interopRequireDefault(_fairy3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dolls = _doll2.default.map(function (data) {
  var id = data.id;

  // 개조 인형 데이터일때

  return id > 20000 ? (0, _doll4.default)((0, _extends3.default)({}, _doll2.default.find(function (_ref) {
    var baseId = _ref.id;
    return baseId === id - 20000;
  }), data)) : (0, _doll4.default)(data);
});
var fairy = _fairy2.default.map(function (data) {
  return (0, _fairy4.default)(data);
});

module.exports = { dolls: dolls, equips: _equip2.default, fairy: fairy };