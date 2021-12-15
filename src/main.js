import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import locale from 'view-design/dist/locale/en-US';

Vue.use(ViewUI, {
  locale,
  transfer: true,
  size: 'large',
  capture: false,
  select: {
      arrow: 'md-arrow-dropdown',
      arrowSize: 20
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
