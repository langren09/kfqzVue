// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入jquery文件
import "./assets/js/jquery.min"
Vue.config.productionTip = false
// 引入json文件
//  mzList,csdList,hkList
import json from '../static/js/json'
Vue.prototype.$json = json
// 引入city文件
//  where
import areaList from '../static/js/city'
Vue.prototype.$areaList = areaList
// 初始化样式
import './assets/css/global.css'
// 註冊標題
import titleFoot from './components/common/titleFoot'
Vue.component('titleFoot', titleFoot)
// 註冊按鈕
import btn from './components/common/btn'
Vue.component('btn', btn)
// 註冊标题
import headerTitle from './components/common/header'
Vue.component('headerTitle', headerTitle)
// 註冊文本框
import ipt from './components/common/ipt'
Vue.component('ipt', ipt)
// 註冊單選框
import iptRadio from './components/common/iptRadio'
Vue.component('iptRadio', iptRadio)
// 註冊选择框
import sel from './components/common/sel'
Vue.component('sel', sel)
// 註冊地址选项框
import selAdd from './components/common/selAdd'
Vue.component('selAdd', selAdd)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
