//todo node js提供的
const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //文件入口 主文件 从哪开始执行
  entry: "./src/app.ts",
  //打包后目录
  output: {
    //todo 用引入的path拼路径 相当于  ./dist
    path: path.resolve(__dirname,'dist'),
    filename: "bundle.js"
  },
  mode: 'development',
  //指定打包时用的模块=怎么编译
  module: {
    //加载规则
    rules: [
      {
        //test规则生效的文件  以ts结尾的文件
        test:/\.ts$/,
        use:'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  //webpack插件
  plugins: [
      new HTMLWebpackPlugin()
  ],
  //设置引用模块
  resolve: {
    extensions: ['.js', '.ts']
  }

}
