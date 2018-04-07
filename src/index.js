import dollData from '../data/doll.json';
import equips from '../data/equip.json';
import fairyData from '../data/fairy.json';
import getDoll from './api/doll';
import getFairy from './api/fairy';

const dolls = dollData.map((data) => {
  const {id} = data;
  
  // 개조 인형 데이터일때
  return id > 20000
    ? getDoll({...dollData.find(({id: baseId}) => baseId === (id - 20000)), ...data})
    : getDoll(data);
});
const fairy = fairyData.map((data) => getFairy(data));

module.exports = {dolls, equips, fairy};
