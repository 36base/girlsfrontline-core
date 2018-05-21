import dollData from '../../data/doll.json';
import getDoll from './doll';

describe('`getDoll()`', () => {
  const m1873 = getDoll(dollData[0]);
  
  test('returns doll object', () => {
    const m4a1Mod = getDoll({...dollData.find(({id: baseId}) => baseId === 55), ...dollData.find(({id}) => id === 20055)});
    
    expect(m4a1Mod).toMatchObject({
      name: 'M4A1Mod',
      rank: 5,
      illust: '海猫络合物',
      voice: 'Haruka Tomatsu',
      stats: {hp: 100, pow: 110, hit: 120, dodge: 120, speed: 100, rate: 120, armorPiercing: 10, crit: 20},
      effect: {
        effectType: 'ar',
        effectCenter: 5,
        effectPos: [2, 3, 6, 8, 9],
        gridEffect: {pow: 20, crit: 32},
      },
      skill: {
        id: 1,
        name: '화력전개T',
        dataPool: {
          PW: [45, 48, 52, 55, 58, 62, 65, 68, 72, 75],
          DR: [6, 6.4, 6.8, 7.2, 7.6, 8, 8.4, 8.8, 9.4, 10],
          CD: [20, 19.6, 19.1, 18.7, 18.2, 17.8, 17.3, 16.9, 16.4, 16],
          IC: 4,
        },
      },
      skill2: {
        id: 87,
        dataPool: {DM: [300, 333, 367, 400, 433, 467, 500, 533, 567, 600]},
      },
      grow: 115,
    });
  });
  
  test('returns skill object', () => {
    const cz2000 = getDoll(dollData.find(({id}) => id === 207));
    const {skill} = m1873;
    
    expect(skill).toMatchObject({
      data: [
        {key: 'PW', label: '화력증가', type: 'pow'},
        {key: 'DR', label: '지속시간', type: 'duration'},
        {key: 'CD', label: '쿨다운', type: 'cooldown'},
        {key: 'IC', label: '초반 쿨타임', type: 'startcd'},
      ],
      dataPool: {
        CD: [15, 14.7, 14.3, 14, 13.7, 13.4, 13, 12.7, 12.3, 12],
        DR: [5, 6, 6, 6, 7, 7, 7, 8, 8, 8],
        PW: [12, 13, 14, 15, 16, 17, 18, 19, 20, 22],
        IC: 6,
      },
      desc: '아군 전체 화력을 {PW}% 상승시킨다.',
      id: 3,
      name: '일제사격',
      path: 'powBuff',
    });
    expect(m1873.getSkill({level: 11})).toMatchObject({
      dataPool: {CD: 12, DR: 8, IC: 6, PW: 22},
      desc: '아군 전체 화력을 22% 상승시킨다.',
    });
    expect(m1873.getSkill()).toMatchObject({
      dataPool: {CD: 12, DR: 8, IC: 6, PW: 22},
      desc: '아군 전체 화력을 22% 상승시킨다.',
    });
    expect(cz2000.getSkill()).toMatchObject({
      data: [
        {key: 'HT', label: '명중증가', type: 'hit'},
        {key: 'AR', label: '사속증가', type: 'rate'},
        {key: 'DR', label: '지속시간', type: 'duration'},
        {key: 'CD', label: '쿨다운', type: 'cooldown'},
        {key: 'IC', label: '초반 쿨타임', type: 'startcd'},
      ],
      dataPool: {AR: 50, CD: 16, CR: 25, DR: 10, HT: 40, IC: 4, PW: 65},
      desc: '자신의 명중이 40%, 사속이 50% 증가한다.',
    });
    expect(cz2000.getSkill({night: false})).toMatchObject({
      data: [
        {key: 'PW', label: '화력증가', type: 'pow'},
        {key: 'CR', label: '치명율증가', type: 'crit'},
        {key: 'DR', label: '지속시간', type: 'duration'},
        {key: 'CD', label: '쿨다운', type: 'cooldown'},
        {key: 'IC', label: '초반 쿨타임', type: 'startcd'},
      ],
      dataPool: {CD: 16, CR: 25, DR: 10, IC: 4, PW: 65},
      desc: '자신의 화력이 65%, 치명타율이 25% 증가한다.',
    });
  });
  test('returns stats object', () => {
    const m4a1 = getDoll(dollData.find(({id}) => id === 55));
    const {stats} = m1873;
    
    expect(stats).toMatchObject({
      hp: 120,
      pow: 125,
      hit: 90,
      dodge: 95,
      speed: 100,
      rate: 85,
      armorPiercing: 10,
      crit: 20,
    });
    expect(m1873.getStats()).toMatchObject({
      hp: 80,
      pow: 36,
      hit: 49,
      dodge: 76,
      speed: 15,
      rate: 47,
      armorPiercing: 10,
      crit: 20,
    });
    expect(m1873.getStats({level: 20})).toMatchObject({
      hp: 48,
      pow: 17,
      hit: 15,
      dodge: 22,
    });
    expect(m1873.getStats({favor: 0})).toMatchObject({
      pow: 34,
      hit: 46,
      dodge: 72,
      rate: 47,
    });
    expect(m1873.getStats({favor: 100})).toMatchObject({
      pow: 38,
      hit: 52,
      dodge: 80,
      rate: 47,
    });
    expect(m4a1.getStats({favor: 150})).toMatchObject({
      pow: 51,
      hit: 53,
      dodge: 53,
      rate: 79,
    });
    expect(m4a1.getStats({level: 120, favor: 150})).toMatchObject({
      pow: 53,
      hit: 55,
      dodge: 55,
      rate: 80,
    });
  });
});
