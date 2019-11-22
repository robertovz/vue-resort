import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Products from "@/components/Products/ProductsList";
import Details from "@/components/Products/Details";
import NotFound from "@/components/NotFound";

Vue.use(Router)
let routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/products', name: "Products", component: Products },
  { path: '/details/:p_name/:p_id', name: "details", component: Details },
  { path: '*', name: "NotFound", component: NotFound },
];

const router = new Router({
  mode: 'history',
  routes,
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
})

export default router;


Vue.component('navbar', require('../components/Navbar.vue').default);
Vue.component('products-component', require('../components/Products/Products.vue').default);
Vue.component('productsCategory', require('../components/Products/ProductsCategory.vue').default);
Vue.component('add-to-compare', require('../components/Compare/AddToCompare.vue').default);
Vue.component('miniList', require('../components/Compare/MiniList.vue').default);
Vue.component('miniReservation', require('../components/Reservation/MiniReservation.vue').default);
Vue.component('compare', require('../components/Compare/CompareList.vue').default);
Vue.component('hero', require('../components/Hero.vue').default);
Vue.component('footer-component', require('../components/Footer.vue').default);
