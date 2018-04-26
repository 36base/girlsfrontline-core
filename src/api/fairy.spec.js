import fairyData from '../../data/fairy.json';
import getFairy from './fairy';

describe('`getStats()`', () => {
  test('returns default stats', () => {
    const fighting = getFairy(fairyData[0]);
    const defense = getFairy(fairyData[4]);
    const cooking = getFairy(fairyData.find(({id}) => id === 19));
    
    expect(fighting.getStats()).toMatchObject({
      pow: 25,
      hit: 80,
      dodge: 40,
      armor: 10,
    });
    expect(fighting.skill).toMatchObject({
      data: [
        {key: 'PW', label: '화력증가', type: 'pow'},
        {key: 'AR', label: '사속증가', type: 'rate'},
        {key: 'CP', label: '지령 소모치', type: 'commandpoint'},
      ],
      dataPool: {
        AR: [5, 6, 6, 7, 7, 8, 8, 9, 9, 10],
        CP: 1,
        PW: [5, 7, 8, 10, 12, 13, 15, 17, 18, 20],
      },
      desc: '다음 전투에서 제대의 모든 인형의 화력을 {PW}%, 사속을 {AR}% 증가시킨다. (중첩 불가능)',
      id: 1001,
      name: '전투효율',
      path: 'fighting',
    });
    expect(fighting.getSkill()).toMatchObject({
      dataPool: {AR: 10, CP: 1, PW: 20},
      desc: '다음 전투에서 제대의 모든 인형의 화력을 20%, 사속을 10% 증가시킨다. (중첩 불가능)',
    });
    expect(defense.getStats()).toMatchObject({
      pow: 22,
      dodge: 80,
      armor: 20,
    });
    expect(cooking.getStats()).toMatchObject({
      pow: 10,
      hit: 20,
      dodge: 80,
      armor: 20,
      critDmg: 10,
    });
  });
});
