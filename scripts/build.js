const fs = require('fs-extra');
const {appLocales, appBuildLocales} = require('../config/paths');
const buildLocale = require('./build-locale');
const moveLocale = require('./move-locale');

fs.ensureDirSync(appBuildLocales);
buildLocale(appLocales, appBuildLocales);
moveLocale(appBuildLocales);
