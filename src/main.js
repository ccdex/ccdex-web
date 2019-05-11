// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
Vue.use(ElementUI);
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
let langZh = require('@/lang/zh')
let langEn = require('@/lang/en')
let setLanguage = (lang) => {
  let langData
  if (lang === 'en') {
    langData = langEn
  } else if (lang === 'zh') {
    langData = langZh
  } else {
    langData = langEn
  }
  Vue.prototype.LANG = langData
}
let languageType = localStorage.getItem('CCDEX_LANGUAGE_TYPE')
setLanguage(languageType)
Vue.prototype.changeLang = (lang) => {
  setLanguage(lang)
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
