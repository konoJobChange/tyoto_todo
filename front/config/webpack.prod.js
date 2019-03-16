const path = require('path');                             // 絶対パスに変換するために
const htmlWebpackPlugin = require('html-webpack-plugin'); // index.htmlをビルドチェインの中で作っちゃう
console.log("PATH: ", path);

module.exports = {
  mode: 'production',        // 使える文字列が決まってる、本番用なのでproduction。
  entry: './src/index.tsx',  // エントリポイントの指定、src下に書いていくので　src/index.tsxにしとく
  module: {
    rules: [
      {                             // Linterを走らせる
        enforce: 'pre',           // ビルド前処理だよってこと
        loader: 'tslint-loader',  // tslint-loaderを使う
        test: /\.tsx?$/,          // tslint-loaderに渡すファイルの正規表現。xxx.tsとxxx.tsxの正規表現。
        exclude: [                // 渡さないファイル
            /node_modules/
        ],
        options: {
            emitErrors: true      // これ設定しとくとTSLintが出してくれたwarningをエラーとして扱ってくれる、要するに-Wall
        }
      },
      {
        loader: 'ts-loader',      // ts-loaderを使う、こいつがトランスパイルしてくれる
        test: /\.tsx?$/,
        exclude: [
          /node_modules/
        ],
        options: {
          configFile: 'tsconfig.prod.json' // TypeScriptのコンパイル設定ファイル
        }
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]    // importの時に、これらの拡張子は解決してもらえる、要するにHoge.tsxをimport Hoge from './Hoge'みたいに書ける
  },
  output: {
    filename: 'static/js/bundle.js',        // 仕上がりファイルの置き場
    path: path.resolve(__dirname, 'dist')   // 出力ディレクトリの指定の絶対パス
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "index.html"    // 同じ階層にあるindex.htmlを元に、デプロイ用のindex.htmlを作って出力ディレクトリに配置してくれる
    })
  ]
};
