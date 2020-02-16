const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

module.exports = [
  new ForkTsCheckerWebpackPlugin({
    async: false
  }),
  new VueLoaderPlugin(),
  new VuetifyLoaderPlugin()
];
