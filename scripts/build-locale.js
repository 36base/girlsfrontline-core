const path = require('path');
const fs = require('fs-extra');

module.exports = function (appLocales, appBuildLocales) {
  const locales = fs.readdirSync(appLocales);
  locales.forEach((locale) => {
    const localePath = path.join(appLocales, locale);
    const outputPath = path.join(appBuildLocales, locale);
    let resources = {};
    fs.readdirSync(localePath).forEach((filename) => {
      const filePath = path.join(localePath, filename);
      resources = {...resources, ...fs.readJsonSync(filePath)};
    });
    fs.ensureDirSync(outputPath);
    return fs.writeFileSync(path.join(outputPath, 'translation.json'), JSON.stringify(resources));
  });
};
