module.exports = {
  publicPath: './',
  // 输出文件目录
  outputDir: 'front',
  // 多页配置
  pages: {
    admin: {
      // 应用入口配置，相当于单页面应用的main.js，必需项
      entry: 'src/pages/admin/main.js',
      // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致
      template: 'public/admin.html',
      // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
      filename: 'admin.html'
    },
    index: {
      entry: 'src/pages/index/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // webpack-dev-server 相关配置
  devServer: {
    // 本地端口
    port: 9090,
    // 代理
    proxy: '',
    // eslint-loader警告配置
    overlay: {
      warnings: true,
      errors: true
    }
  },
  // webpack相关配置
  configureWebpack: {
    devtool: 'source-map'
  }

}
