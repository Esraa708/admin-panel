import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Settings from './components/Settings';
import Payment from './components/Payment';

Vue.config.productionTip = false
const routes = [
  {
    path: '/settings', component: Settings, children: [{
      path: 'payment',
      component: Payment
    }
    ]
  },

]
const router = new VueRouter({
  routes
})

Vue.use(VueRouter)
new Vue({
  vuetify
  , router,
  render: h => h(App)
}).$mount('#app')
