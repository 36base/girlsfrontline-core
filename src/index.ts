import dollJson from '../data/doll.json';
import equipJson from '../data/equip.json';
import fairyJson from '../data/fairy.json';
import Doll from './doll';
import Equip from './equip';
import Fairy from './fairy';
import i18next from './i18next';
import { IDoll, IEquip, IFairy } from './interface';

const dollData = dollJson as IDoll[];
const equipData = equipJson as IEquip[];
const fairyData = fairyJson as IFairy[];

const dolls = dollData.map((data) => {
  const { id } = data;

  // 개조 인형 데이터일때
  return id > 20000
    ? new Doll({ ...dollData.find(({ id: dollId }) => dollId === (id - 20000)), ...data })
    : new Doll(data);
});
const equips = equipData.map(data => new Equip(data));
const fairies = fairyData.map(data => new Fairy(data));

const gfcore = { i18next, dolls, equips, fairies };

export { i18next, dolls, equips, fairies };
export default gfcore;
