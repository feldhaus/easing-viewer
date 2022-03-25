/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const { version } = require('./package.json');

module.exports = merge(common, {
  mode: 'development',
  // Control how source maps are generated
  devtool: 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 8080,
  },
  plugins: [
    new webpack.DefinePlugin({
      __VERSION__: JSON.stringify(version),
      __ENV__: JSON.stringify('development'),
    }),
  ],
});
