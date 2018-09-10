import i18next from 'i18next';
import battle_skill_configJson from '../../data/i18n/ko-KR/battle_skill_config.json';
import equipJson from '../../data/i18n/ko-KR/equip.json';
import fairyJson from '../../data/i18n/ko-KR/fairy.json';
import fairySkinJson from '../../data/i18n/ko-KR/fairy_skin.json';
import gunJson from '../../data/i18n/ko-KR/gun.json';
import gunObtainJson from '../../data/i18n/ko-KR/gun_obtain.json';
import mission_skill_configJson from '../../data/i18n/ko-KR/mission_skill_config.json';
import skinJson from '../../data/i18n/ko-KR/skin.json';

const json:i18next.ResourceLanguage = {
  translation: {
    ...battle_skill_configJson,
    ...equipJson,
    ...fairyJson,
    ...fairySkinJson,
    ...gunJson,
    ...gunObtainJson,
    ...mission_skill_configJson,
    ...skinJson,
  },
};

export default json;
