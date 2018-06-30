import 'babel-polyfill';
import dollData from '../data/doll.json';
import equipData from '../data/equip.json';
import fairyData from '../data/fairy.json';
import {getDoll, getStats as getDollStats} from './api/doll';
import {getEquip} from './api/equip';
import {getFairy} from './api/fairy';

const dolls = dollData.map((data) => {
  const {id} = data;
  
  // 개조 인형 데이터일때
  return id > 20000
    ? getDoll({...dollData.find(({id: baseId}) => baseId === (id - 20000)), ...data})
    : getDoll(data);
});
const equips = equipData.map((data) => getEquip(data));
const fairy = fairyData.map((data) => getFairy(data));

module.exports = {dolls, equips, fairy, getDollStats};
