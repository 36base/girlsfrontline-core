const path = require('path');
const fs = require('fs-extra');

module.exports = function (appBuildLocales) {
  fs.readdirSync(appBuildLocales).forEach((filename) => {
    const src = path.join(appBuildLocales, filename);
    const dest = path.join(appBuildLocales, filename.replace(/.json$/g, ''), 'gfcore.json');

    fs.moveSync(src, dest, {overwrite: true});
  });
};
