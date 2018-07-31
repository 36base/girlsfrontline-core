const paths = require('./paths');

module.exports = {
  mode: 'production',
  entry: [
    'babel-polyfill',
    paths.appIndexJs,
  ],
  output: {
    filename: 'gfcore.min.js',
    path: paths.appBuild,
    library: 'gfcore',
    libraryTarget: 'umd',
  },
  module: {
    rules: [{
      test: /\.(js|jsx|mjs)$/,
      include: paths.appSrc,
      loader: require.resolve('babel-loader'),
      options: {
        compact: true,
      },
    }],
  },
};
