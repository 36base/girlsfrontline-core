import { ILocale } from "./interface";

export function getSkill(locale:ILocale, skillId:string, {skillLevel = 10} = {}) {
  let skill = `${skillId}`;
  if(skill.startsWith('*')){
    skill = `${skillId}`;
  }
  return locale[skill];
}
