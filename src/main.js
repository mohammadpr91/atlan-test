import Vue from 'vue'
import App from './App.vue'
import Service from "./plugins/Service";
import Store from "./store/index";

Vue.prototype.$Service = new Service();
Vue.prototype.$STORE = Store;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
