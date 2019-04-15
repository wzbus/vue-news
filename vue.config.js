const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
  },
  devServer: {
    proxy: {
      '/index': {
        target: 'http://v.juhe.cn/toutiao/index',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/index': ''
        }
      },
      '/api': {
        target: 'http://api.juheapi.com/japi/toh',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/API': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/API': '/mock'
        }
      }
    }
  }
}
