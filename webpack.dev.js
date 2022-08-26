const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development', //? "development" yada "production" olur. Development'da main.js açık yazılır, production'da minified olur.
  output: {
    filename: '[name].bundle.js', //? Çıkış Dosyası
    path: path.resolve(__dirname, 'dist'), //? Çıkış dosyasını içeren dosya adı
    //? __dirname absolute path'i veren değişken
  },
});
