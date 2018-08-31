import { IEquipStats } from '../interface';
import { getEquipStats } from './equip';

describe('`getEquipStats()`', () => {
  // tslint:disable-next-line:variable-name
  const VFLStats:IEquipStats = {
    criticalPercent: {
      min: 17,
      max: 24,
      upgrade: 1000,
    },
  };
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
});
