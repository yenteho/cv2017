const   path   =   require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports   = {
    entry:   './src/app.js',
    output: {
    path:   path.resolve(__dirname, 'dist'),
    filename:   'app.js'
    },
    module: {
        rules: [
          {
            test: /\.sass$/,
            use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: [ 'css-loader', 'sass-loader' ],
                  publicPath: '/dist'
                })
          },
          {
            test: /\.pug$/,
            use: ['html-loader', 'pug-html-loader']
           }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Project',
        minify: {
          collapseWhitespace: true
        },
        hash: true,
        template: './src/index.pug'
      }),
      new   ExtractTextPlugin("styles.css")
    ]
};