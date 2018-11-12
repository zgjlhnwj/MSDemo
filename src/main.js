// 生产环境中注释掉以下语句
import 'sysStatic/css/theme-blue.scss'
import '../mock/index.js'

import 'babel-polyfill'

import Vue from "vue"
import i18n from './language/languageConfig'
import ElementUI from 'element-ui'
import router from './router'
import store from './store'
import axios from './util/ajax'
import md5 from './util/md5'
import App from './index'
import './platform/components/install'
import './platform/plugins/install'


// 注册组件到Vue
Vue.prototype.$axios = axios
Vue.prototype.$md5 = md5
Vue.use(ElementUI)

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
