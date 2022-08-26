const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'production', //? "development" yada "production" olur. Development'da main.js açık yazılır, production'da minified olur.
  output: {
    filename: '[name].[contenthash].bundle.js', //? Çıkış Dosyası //* Cache Busting için output dosyasına hash eklemek için
    path: path.resolve(__dirname, 'dist'), //? Çıkış dosyasını içeren dosya adı
    //? __dirname absolute path'i veren değişken
  },
  plugins: [new CleanWebpackPlugin()], //? Her build sonrası eski bundle'ı siler.
});
