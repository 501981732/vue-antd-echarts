import Vue from 'vue'

import ECharts from 'vue-echarts' // 在 webpack 环境下指向 components/ECharts.vue

// 手动引入 ECharts 各模块来减小打包体积
// https://github.com/apache/incubator-echarts/blob/master/index.js
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'

import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/polar'
import 'echarts/lib/component/title'




Vue.component('v-chart', ECharts)