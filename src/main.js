import Vue from "vue";
import Antd from "ant-design-vue";
import Buefy from "buefy";
import router from "./router";
import "ant-design-vue/dist/antd.css";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(Antd);
Vue.use(Buefy)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
