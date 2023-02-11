import 'aos/dist/aos.css';

import Vue from 'vue';

import AOS from 'aos';
import VTooltip from 'v-tooltip';
import VueParallaxJs from 'vue-parallax-js';
import VueRouter from 'vue-router';
import VueScrollTo from 'vue-scrollto';

import App from './App.vue';

var VueCookie = require('vue-cookie');

Vue.use(VTooltip)
Vue.use(VueRouter)
Vue.use(VueScrollTo)
Vue.use(VueCookie);
Vue.use(VueParallaxJs)

Vue.config.productionTip = false

const routes = [
  { path: '/'}
]

const router = new VueRouter({
  mode:'history',
  routes // short for `routes: routes`
})

new Vue({
  created () {
    AOS.init()
  },
  router,
  render: h => h(App),
}).$mount('#app')
