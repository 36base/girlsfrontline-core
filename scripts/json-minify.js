const path = require('path');
const fs = require('fs-extra');

function minify(dir) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const pathToFile = path.join(dir, file);
    const isDirectory = fs.statSync(pathToFile).isDirectory();
    if (isDirectory) {
      minify(pathToFile);
    } else {
      const json = fs.readJsonSync(pathToFile);
      fs.writeFileSync(pathToFile, JSON.stringify(json));
    }
  });
}

module.exports = minify;
