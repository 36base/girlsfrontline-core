import i18next, { InitOptions } from 'i18next';
import XHR from 'i18next-xhr-backend';

export function init(options:InitOptions = {}):Promise<{}> {
  return new Promise((resolve, reject) => {
    i18next.use(XHR).init({
      fallbackLng: 'ko-KR',
      load: 'currentOnly',
      whitelist: ['ko-KR', 'ja-JP', 'en-US', 'zh-CN'],
      backend: {
        loadPath: 'https://unpkg.com/girlsfrontline-core@latest/build/i18n/{{lng}}.json',
        crossDomain: true,
      },
      ...options,
    // tslint:disable-next-line:align
    }, (err) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
}

export default i18next;
