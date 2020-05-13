import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue' // import 
import StateApiService from '@/services/stateServices'
import VueRouter from 'vue-router'
import router from './router'

Vue.use(VueRouter) // register vueRouter plugin
Vue.use(BootstrapVue) // register bootstrap vue componenets plugin
// import css styles to be bundled with webpack's css bundler
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'leaflet/dist/leaflet.css'
// expose state api to all vue instances
Vue.prototype.$stateService = StateApiService

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
