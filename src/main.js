// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import './assets/app.scss';
import 'bootstrap'
import 'popper.js'

window.Vue = require('vue');

import jQuery from 'jquery';
window.$ = window.jQuery = require('jquery');

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

import Vue2Filters from 'vue2-filters';
Vue.use(Vue2Filters);

import StarRating from 'vue-star-rating';
Vue.component('star-rating', StarRating);

import HotelDatePicker from 'vue-hotel-datepicker'
Vue.use(HotelDatePicker);

import swal from 'sweetalert2';
window.swal = swal;

const toast = swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

window.toast = toast;

window.Fire = new Vue();

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
}).$mount('#app');
