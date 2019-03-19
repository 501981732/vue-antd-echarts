module.exports = {
  css: {
    loaderOptions: {
      less: {
         javascriptEnabled: true
      }
    }
  },
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ]
}