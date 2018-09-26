const path = require('path');
const fs = require('fs-extra');
const {appData, appBuildData, appLocales, appBuildLocales} = require('../config/paths');
const minify = require('./json-minify');
const buildLocale = require('./build-locale');
const moveLocale = require('./move-locale');

fs.ensureDirSync(appBuildData);
fs.ensureDirSync(appBuildLocales);
fs.copySync(appData, appBuildData, {overwrite: true});
minify(appBuildData);
buildLocale(appLocales, appBuildLocales);
moveLocale(appBuildLocales);
