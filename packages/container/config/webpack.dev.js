const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 3000,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        configure: 'configure@http://localhost:8081/remoteEntry.js',
        dashboard: 'dashboard@http://localhost:8082/remoteEntry.js',


      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      scriptLoading: 'defer',
      hash: true,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
