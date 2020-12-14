import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入fastclick
import fastclick from 'fastclick'

// 导入base.css
import './assets/css/base.scss'
// 引入字体图标css
import './assets/font/iconfont.css'

// 引入首页导航栏
import navBar from './components/nav'
// 引入首页棋盘
import chessBoard from './components/chessboard'

fastclick.attach(document.body)

/*
// 导入bootstrap(推荐使用 ant-design.vue)
// eslint-disable-next-line no-unused-vars
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
*/

// 全局注册使用element-ui
Vue.use(ElementUI)

Vue.config.productionTip = false

// 全局注册navBar
Vue.component('nav-bar', navBar)
// 全局注册棋盘
Vue.component('chess-board', chessBoard)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
