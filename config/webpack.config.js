const paths = require('./paths');

module.exports = {
  mode: 'production',
  entry: [
    paths.appIndexJs,
  ],
  output: {
    filename: 'gfcore.min.js',
    path: paths.appBuild,
    library: 'gfcore',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  }
};
