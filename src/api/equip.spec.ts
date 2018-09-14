/* tslint:disable variable-name */
import equipJson from '../../data/equip.json';
import { IEquip, IEquipStats } from '../interface';
import { getEquipStats } from './equip';

const equipData = equipJson as IEquip[];

describe('`getEquipStats()`', () => {
  // tslint:disable-next-line:variable-name
  const { stats: VFLStats } = (equipData.find(({ id }) => id === 4) as IEquip);
  const { stats: M4A1EquipStats } = (equipData.find(({ id }) => id === 99) as IEquip);
  test('returns IEquipStats of `VFL 6-24X56` when level is 0', () => {
    expect(getEquipStats(VFLStats)).toMatchObject({
      criticalPercent: {
        min: 17,
        max: 24,
      },
    });
  });
  test('returns IEquipStats of `VFL 6-24X56` when level is 10', () => {
    expect(getEquipStats(VFLStats, { level: 10 })).toMatchObject({
      criticalPercent: {
        min: 34,
        max: 48,
      },
    });
  });
  test('returns IEquipStats of `VFL 6-24X56` when criticalPercent.upgrade is undefined', () => {
    const stats:IEquipStats = {
      criticalPercent: {
        min: 17,
        max: 24,
      },
    };
    expect(getEquipStats(stats)).toMatchObject(stats);
  });
  test('returns IEquipStats of `人形装备_特殊_M4A1` when level is 10', () => {
    expect(getEquipStats(M4A1EquipStats, { level: 10 })).toMatchObject({
      pow: {
        min: 3,
        max: 5,
      },
      armor: {
        min: 11,
        max: 15,
      },
    });
  });
});
