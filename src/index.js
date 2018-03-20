import dollData from '../data/doll.json';
import equips from '../data/equip.json';
import skills from '../data/skill.json';
import fairyData from '../data/fairy.json';
import getDoll from './api/doll';
import getFairy from './api/fairy';

const dolls = dollData.map((data) => getDoll(data));
const fairy = fairyData.map((data) => getFairy(data));

module.exports = {dolls, equips, skills, fairy};
