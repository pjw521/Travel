// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import '@styles/reset.css';
import "@styles/border.css";
import '@styles/iconfont.css';
import fastClick from "fastclick";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import store from "./store"
import router from './router'

Vue.config.productionTip = false;
// 解决300毫秒延迟问题
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
