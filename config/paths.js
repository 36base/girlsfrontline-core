const path = require('path');
const fs = require('fs');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

// config after eject: we're in ./config/
module.exports = {
  appData: resolveApp('data'),
  appLocales: resolveApp('i18n'),
  appBuildData: resolveApp('build/data'),
  appBuildLocales: resolveApp('build/i18n'),
  appBuildUmd: resolveApp('umd'),
  appIndexJs: resolveApp('src/index.ts'),
};
