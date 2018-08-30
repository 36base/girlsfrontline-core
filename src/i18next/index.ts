import i18next from 'i18next';
import koKR from './ko-KR';

const resources:i18next.Resource = { 'ko-KR': koKR };
const defaultLocale:string = 'ko-KR';

i18next.init({
  resources,
  fallbackLng: defaultLocale,
});

export default i18next;
