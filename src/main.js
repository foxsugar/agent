// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style/main.less'
import Ivue from './package'
import VueResource from 'vue-resource'
import VueJsonp from 'vue-jsonp'
Vue.use(VueResource)

Vue.use(Ivue)
Vue.use(VueJsonp)


var isDebugMode = process.env.NODE_ENV !== 'production'
Vue.config.debug = isDebugMode
Vue.config.devtools = isDebugMode
Vue.config.productionTip = isDebugMode

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
