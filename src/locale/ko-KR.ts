import battle_skill_configJson from '../../data/i18n/ko-KR/battle_skill_config.json';
import gunJson from '../../data/i18n/ko-KR/gun.json';
import mission_skill_configJson from '../../data/i18n/ko-KR/mission_skill_config.json';
import skinJson from '../../data/i18n/ko-KR/skin.json';

const json:object = {
  ...battle_skill_configJson,
  ...gunJson,
  ...mission_skill_configJson,
  ...skinJson,
};

export default json;
