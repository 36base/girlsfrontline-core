import { getSkinResource, SkinType } from './base';

describe('`getSkinResource()`', () => {
  test('returns doll skin resource', () => {
    expect(getSkinResource(SkinType.Doll, 1, 2105)).toBe('skin-10002105');
  });
  test('returns fairy skin resources', () => {
    const resources = [
      getSkinResource(SkinType.Fairy, 1, 55),
      getSkinResource(SkinType.Fairy, 2, 55),
    ];
    expect(resources).toMatchObject([
      'fairy_skin-10000055',
      'fairy_skin-20000055',
    ]);
  });
});
