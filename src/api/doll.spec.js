import dollData from '../../data/doll.json';
import getDoll from './doll';

describe('`getDoll()`', () => {
  test('returns skill object', () => {
    const m1873 = getDoll(dollData[0]);
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
      dataPool: {AR: 40, CD: 16, CR: 25, DR: 10, HT: 50, IC: 4, PW: 65},
      desc: '자신의 명중이 50%, 사속이 40% 증가한다.',
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
});
