/* tslint:disable variable-name */
import dollJson from '../../data/doll.json';
import { IDoll, IStats } from '../interface';
import { getEffect, getFavorRatio, getStats } from './doll';

const dollData = dollJson as IDoll[];

describe('`getFavorRatio()`', () => {
  test('returns favorRatio when favor less than 10', () => {
    expect(getFavorRatio(9)).toBe(-0.05);
  });
  test('returns favorRatio when favor less than 90', () => {
    expect(getFavorRatio(89)).toBe(0);
  });
  test('returns favorRatio when favor less than 140', () => {
    expect(getFavorRatio(139)).toBe(0.05);
  });
  test('returns favorRatio when favor less than 190', () => {
    expect(getFavorRatio(189)).toBe(0.1);
  });
  test('returns favorRatio when favor greater than 189', () => {
    expect(getFavorRatio(200)).toBe(0.15);
  });
});

describe('`getEffect()`', () => {
  const GG_elfeldt = dollData.find(({ codename }) => codename === 'GG_elfeldt') as IDoll;
  const BB_Noel = dollData.find(({ codename }) => codename === 'BB_Noel') as IDoll;
  test('returns effect of GG_elfeldt', () => {
    const { type, effect } = GG_elfeldt;
    expect(getEffect(type, 5, effect)).toMatchObject(effect);
  });
  test('returns effect of BB_Noel when dummyLink is 3', () => {
    const { type, effect } = BB_Noel;
    const gridEffect = { ...effect.gridEffect };
    Object.entries(gridEffect).map(([key, value]) => {
      gridEffect[key] = Math.floor(Number(value) * 1.5);
    });
    expect(getEffect(type, 3, effect)).toMatchObject({
      ...effect,
      gridEffect,
    });
  });
  test('returns effect of BB_Noel when dummyLink is 5', () => {
    const { type, effect } = BB_Noel;
    const gridEffect = { ...effect.gridEffect };
    Object.entries(gridEffect).map(([key, value]) => {
      gridEffect[key] = Math.floor(Number(value) * 2);
    });
    expect(getEffect(type, 5, effect)).toMatchObject({
      ...effect,
      gridEffect,
    });
  });
});

describe('`getStats()`', () => {
  const Type100 = dollData.find(({ codename }) => codename === 'Type100') as IDoll;
  const M4A1Mod = dollData.find(({ codename }) => codename === 'M4A1Mod') as IDoll;
  test('returns stats of Type100', () => {
    const { type, stats, grow } = Type100;
    expect(getStats(type, stats, grow)).toMatchObject({
      hp: 1060,
      pow: 29,
      hit: 14,
      dodge: 67,
      rate: 76,
    });
  });
  test('returns stats of Type100 when not using capsule', () => {
    const { type, stats, grow } = Type100;
    expect(getStats(type, stats, grow, { growth: false })).toMatchObject({
      hp: 1060,
      pow: 11,
      hit: 2,
      dodge: 9,
      rate: 52,
    });
  });
  test('returns stats of Type100 when dummyLink is 1', () => {
    const { type, stats, grow } = Type100;
    expect(getStats(type, stats, grow, { dummyLink: 1 })).toMatchObject({
      hp: 212,
      pow: 29,
      hit: 14,
      dodge: 67,
      rate: 76,
    });
  });
  test('returns stats of M4A1Mod', () => {
    const { type, stats, grow } = M4A1Mod;
    expect(getStats(type, stats, grow, { level: 120 })).toMatchObject({
      hp: 565,
      pow: 50,
      hit: 50,
      dodge: 50,
      rate: 80,
    });
  });
  test('returns stats of M4A1Mod when favor is 200', () => {
    const { type, stats, grow } = M4A1Mod;
    expect(getStats(type, stats, grow, { level: 120, favor: 200 })).toMatchObject({
      hp: 565,
      pow: 58,
      hit: 58,
      dodge: 58,
      rate: 80,
    });
  });
  test('returns stats of dummy data', () => {
    const type = 'hg';
    const stats = {
      foo: 1,
      bar: 2,
    };
    const grow = 300;
    expect(getStats(type, stats, grow)).toMatchObject({
      foo: 1,
      bar: 2,
    });
  });
});
