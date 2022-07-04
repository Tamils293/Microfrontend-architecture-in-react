
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      scriptLoading: 'defer',
      hash: true,
    }),
  ],
  target: "web",
  resolve: {
    fallback: {

      "crypto": false,
      "stream": false
    },
  },

  devtool: 'inline-source-map',
  module: {


    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,

        use: ["style-loader", "css-loader"],

      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        loader: 'file-loader',
        include: [/fonts/]
      },
      {
        test: /\.svg/,
        use: {
          loader: "svg-url-loader",
          options: {
            // make all svg images to work in IE
            iesafe: true,
          },
        },
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },


    ],

  },
};
