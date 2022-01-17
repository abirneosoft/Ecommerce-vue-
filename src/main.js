import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import * as VueGoogleMaps from "vue2-google-maps"
import Vuelidate from 'vuelidate'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);
Vue.config.productionTip = false
Vue.use(Vuelidate)

Vue.use(VueGoogleMaps, {
  load: {
    key: "GOOGLE MAP API KEY GOES HERE",
    libraries: "places"
  }
});

new Vue({
  router,store,
  render: h => h(App),
}).$mount('#app')
