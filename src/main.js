import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import {httpApi} from "./config/axios";

Vue.config.productionTip = false

Vue.prototype.$http = httpApi


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    this.$http.defaults.baseURL = process.env.VUE_APP_API_URL;
    let token = this.$store.getters.token;
    if (token) {
      console.log(token);
      this.$http.defaults.headers["Authorization"] = 'Bearer ' + token;
    }

    this.$http.interceptors.response.use(
        (response) => {
          return response;
        },
        (error) => {
          if (error.response.status === 401) {
            this.$toast.error("Tu sesión expiro, inicia sesión nuevamente.");
            this.$router.replace({name: "Login"});
          }
          return Promise.reject(error);
        }
    );
  }
}).$mount('#app')
