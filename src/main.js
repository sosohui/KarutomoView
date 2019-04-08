import Vue from "vue";
import './plugins/vuetify'
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/build/css/mdb.css';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuetify from 'vuetify'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vueButtonEffect from 'vue-button-effect'

Vue.use(vueButtonEffect)

Vue.use(BootstrapVue)
Vue.use(Vuetify)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
