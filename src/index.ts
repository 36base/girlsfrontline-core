import dollJson from '../data/doll.json';
import equipJson from '../data/equip.json';
import fairyJson from '../data/fairy.json';
import { Doll, getStats as getDollStats } from './doll';
import { IDoll, IEquip, IFairy } from './interface';
// import { getEquip } from './api/equip';
// import { getFairy } from './api/fairy';

const dollData = dollJson as IDoll[];
const equipData = equipJson as IEquip[];
const fairyData = fairyJson as IFairy[];

interface ICore {
  dolls:Doll[];
}

function init(locale:string):ICore {
  const dolls = dollData.map((data) => {
    const { id } = data;

    // 개조 인형 데이터일때
    return id > 20000
      ? new Doll({ ...dollData.find(({ id: baseId }) => baseId === (id - 20000)), ...data })
      : new Doll(data);
  });
  // TODO: TODO
  // const equips = equipData.map(data => getEquip(data));
  // const fairy = fairyData.map(data => getFairy(data));

  return {dolls};
}

// const gfcore = { dolls, equips, fairy, getDollStats };

// export { dolls, equips, fairy, getDollStats };
// export default gfcore;
