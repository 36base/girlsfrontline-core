const path = require('path');
const fs = require('fs-extra');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

fs.copySync(resolveApp('data'), resolveApp('build/data'), {overwrite: true});
build(resolveApp('build/data'));

function build(dir) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const pathToFile = path.join(dir, file);
    const isDirectory = fs.statSync(pathToFile).isDirectory();
    if (isDirectory) {
      build(pathToFile);
    } else {
      const json = fs.readJsonSync(pathToFile);
      fs.writeFileSync(pathToFile, JSON.stringify(json));
    }
  });
}
