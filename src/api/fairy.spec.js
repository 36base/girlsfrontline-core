import fairyData from '../../data/fairy.json';
import getFairy from './fairy';

describe('`getStats()`', () => {
  test('returns default stats', () => {
    const fighting = getFairy(fairyData[0]);
    const defense = getFairy(fairyData[4]);
    
    expect(fighting.getStats()).toMatchObject({
      pow: 25,
      hit: 80,
      dodge: 40,
      armor: 10,
    });
    expect(defense.getStats()).toMatchObject({
      pow: 22,
      dodge: 80,
      armor: 20,
    });
  });
});
