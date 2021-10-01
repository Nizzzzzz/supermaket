// import Vue from 'vue'
// import App from './App.vue'
// Vue.config.productionTip = false

// new Vue({
//     el: '#app',
//     render: h => h(App)
// })
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
//可能是因为使用的脚手架版本不同，导致之前的引入vue的代码出现错误
createApp(App).use(router).mount('#app')
// createApp(App).mount('#app')