// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Row, Col, Swipe, SwipeItem, Lazyload, List, Field, NavBar, Loading } from 'vant';
// import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
// import 'swiper/dist/css/swiper.css'
//npm install vant --save --registry=https://registry.npm.taobao.org 单独进行淘宝进项下载
Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload).use(List).use(Field).use(NavBar).use(Loading);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})