import Vue from 'vue'
import Vuelidate from 'vuelidate'
// import VeeValidate from 'vee-validate'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import router from './router'

Vue.use(Vuelidate);
// Vue.use(VeeValidate);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')