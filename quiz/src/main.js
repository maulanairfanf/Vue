import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VeeValidate from 'vee-validate'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'

Vue.use(Vuelidate);
Vue.use(VeeValidate);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')