import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

import {  Menu,  Submenu,  MenuItem,  MenuItemGroup} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)

import http from './service/http'
import api from './service/api'

Vue.use(ViewUI)
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

Vue.config.productionTip = false

Vue.prototype.$http = http // ajax请求
Vue.prototype.$api = api // api统一

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
