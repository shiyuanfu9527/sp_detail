import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import  './assets/common.less'
import  './assets/mobile.less'
import  './assets/pc.less'
new Vue({
  render: h => h(App),
}).$mount('#app')
