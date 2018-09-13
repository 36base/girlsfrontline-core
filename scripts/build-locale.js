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
    return fs.writeFileSync(outputPath, JSON.stringify(resources));
  });
};
