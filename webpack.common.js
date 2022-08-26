const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    //? Başlangıç Dosyaları. Birden fazla dosya başlangıç olarak verilebilir. Her dosya için ayrı bundle oluşur.
    main: './src/index.js',
    vendor: './src/vendor.js', //? Bu dosyanın içine genelde değişmeyeecek kütüphaneleri ekleyebiliriz. Böylece içerik değişse bile sabit olan bu kütüphaneler tekrar indirilmek zorunda kalmaz.
  },
  plugins: [
    //? Her build sonrası oluşturulan bundle'ı ekleyerek ve verdiğiniz şablonu kullanarak yeni bir html dosyası oluşturur ve dist içine ekler.
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/, //? Regex ile kontrol yapılır.
        use: [
          //? Şart sağlanırsa bu loader'lar kullanılır.
          'style-loader', //* 3.Stillleri DoM'a uygular
          'css-loader', //* 2. CSS'i commonjs'e çevirir (JS Kodu)
          'sass-loader', //* 1. SCSS'i CSS'e çevirir.
        ],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(svg |png|jpg|gif)$/, //? Fotograflar için kullanılan loader, hangi soya uzantısı var ise ayrı ayrı yazılır
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]', //? Dosya ismi.hash kodu. dosya uzantısı
            outputPath: 'imgs',
          },
        },
      },
    ],
  },
};
