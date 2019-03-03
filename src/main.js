import Vue from 'vue'
import App from './App.vue'
import CustomSwitch from '../packages/switch/index'

const components = [
  CustomSwitch
]

window.Vue = Vue;

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });

}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

new Vue({
  el: '#app',
  render: h => h(App)
})



