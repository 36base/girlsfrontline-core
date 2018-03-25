import equipData from '../../data/equip.json';
import getEquip from './equip';

describe('`getEquip()`', () => {
  test('returns stats object', () => {
    const vfl = getEquip(equipData.find(({name}) => name === 'VFL 6-24X56'));
    
    expect(vfl.getStats()).toMatchObject({
      crit: {
        max: 48,
        min: 34,
      },
    });
    expect(vfl.getStats({level: 0})).toMatchObject({
      crit: {
        max: 24,
        min: 17,
      },
    });
  });
});
