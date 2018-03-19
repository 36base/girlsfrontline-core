import dolls from '../data/doll.json';
import equips from '../data/equip.json';
import skills from '../data/skill.json';
import fairyData from '../data/fairy.json';
import getFairy from './api/fairy';

const fairy = fairyData.map((data) => getFairy(data));

module.exports = {dolls, equips, skills, fairy};
