import { ILocale } from '../interface';
import koKR from './ko-KR';

interface ILocales {
  [key:string]: ILocale;
}

const locales:ILocales = { 'ko-KR': koKR as ILocale };
const defaultLocale = 'ko-KR';

function i18n(locale:string):ILocale {
  return locales[locale] || locales[defaultLocale];
}

export default i18n;
