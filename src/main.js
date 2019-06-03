import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from '@/store/index.js'
import './registerServiceWorker'
import PayPal from 'vue-paypal-checkout'
import FlagIcon from 'vue-flag-icon'
import i18n from './translations/config'

import ApiService from "./common/api.service";

Vue.component('paypal-checkout', PayPal)
Vue.config.productionTip = false;
Vue.use(FlagIcon);

ApiService.init();

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

