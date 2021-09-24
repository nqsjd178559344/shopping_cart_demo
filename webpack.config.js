const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = {
  mode: "development",
  entry: './src/index.js',
  output: {
    filename: 'index.js',
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   options: {}
      // },
      {
        test: /\.less$/,
        use: ["style-loader", "postcss-loader", "css-loader", "less-loader"],
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      // template:
    })
  ]
}

module.exports = config

