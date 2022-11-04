import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMermaidString from 'vue-mermaid-string'

Vue.use(VueMermaidString)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


