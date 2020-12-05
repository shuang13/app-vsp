import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

import ElementUI from 'element-ui';
import {  Menu, Button, Submenu,  MenuItem,  MenuItemGroup, Input, Form, FormItem, Select, Option} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Select)
Vue.use(Option)
Vue.use(Button)

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
