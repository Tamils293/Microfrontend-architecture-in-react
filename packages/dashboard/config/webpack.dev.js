const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJSON = require("../package.json")


const devConfig = {
    mode: 'development',
    devServer: {
        port: 8082,
        historyApiFallback: {
            index: 'index.html',
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'dashboard',
            filename: 'remoteEntry.js',
            exposes: {
                './DashBoardApp': './src/bootstrap',
            },
            shared: packageJSON.dependencies
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};

module.exports = merge(commonConfig, devConfig);
