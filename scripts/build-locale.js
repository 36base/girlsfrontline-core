const path = require('path');
const fs = require('fs-extra');

module.exports = function (appLocales, appBuildLocales) {
  const locales = fs.readdirSync(appLocales);
  locales.forEach((locale) => {
    const localePath = path.join(appLocales, locale);
    const outputPath = path.join(appBuildLocales, `${locale}.json`);
    let resources = {};
    fs.readdirSync(localePath).forEach((filename) => {
      const filePath = path.join(localePath, filename);
      resources = {...resources, ...fs.readJsonSync(filePath)};
    });
    resources = optimizeLocale(resources);
    return fs.writeFileSync(outputPath, JSON.stringify(resources));
  });
  mergeLocale(appBuildLocales);
};

// zh-CN과 다른 언어 파일을 병합
function mergeLocale(appBuildLocales) {
  const locales = fs.readdirSync(appBuildLocales);
  const defaultLocale = fs.readJsonSync(path.join(appBuildLocales, 'zh-CN.json'));
  locales.filter((filename) => filename !== 'zh-CN.json').forEach((filename) => {
    const filePath = path.join(appBuildLocales, filename);
    const locale = fs.readJsonSync(filePath);
    fs.writeFileSync(filePath, JSON.stringify({...defaultLocale, ...locale}));
  });
}

function optimizeLocale(locale) {
  const resources = {...locale};
  Object.entries(resources).filter(([, value]) => value.trim() === '').forEach(([key]) => {
    delete resources[key];
  });
  return resources;
}
