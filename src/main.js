import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/ant-design-vue.js'
import './plugins/import-echarts-plugin.js'
import './assets/css/common.css'
Vue.config.productionTip = false




new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
