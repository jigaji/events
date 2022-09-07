const { merge } = require('webpack-merge');
const CSSMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const common = require('./webpack.common');
// const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new CSSMinimizerWebpackPlugin({}),
      '...',
    ],
  },
});
