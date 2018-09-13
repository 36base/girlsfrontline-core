import { init } from '../index';
import { getSkinResource, SkinType } from './base';

describe('`getSkinResource()`', () => {
  beforeAll(() => {
    return init();
  });
  test('returns doll skin resource', () => {
    expect(getSkinResource(SkinType.Doll, 1, 2105)).toBe('콜트 리볼버 - 기적의 여왕');
  });
  test('returns fairy skin resources', () => {
    const resources = [
      getSkinResource(SkinType.Fairy, 1, 55),
      getSkinResource(SkinType.Fairy, 2, 55),
    ];
    expect(resources).toMatchObject([
      '야에 사쿠라',
      '1단계 기본 외형',
    ]);
  });
});
