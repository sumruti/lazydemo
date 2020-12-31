require('@/assets/scss/all.scss');
require('@/assets/scss/bulma.scss');
require('@/assets/scss/responsive.scss');
require('@/assets/scss/style.scss');



import Vue from 'vue'
import App from './App.vue'
import router from './router';



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
