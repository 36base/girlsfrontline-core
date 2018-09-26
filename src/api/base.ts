export enum SkinType {
  Doll,
  Fairy,
}

export function getSkinResource(skinType:SkinType, resourceId:number, skinId:string|number):string {
  const padId = String(skinId).padStart(7, '0');
  let prefix = 'skin';
  if (skinType === SkinType.Fairy) {
    prefix = 'fairy_skin';
  }
  return `${prefix}-${resourceId}${padId}`;
}
