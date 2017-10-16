import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import {routes} from './routes/routes'

// Vue Router setup
Vue.use(VueRouter)

const router = new VueRouter({
	routes: routes,
	mode: 'history'
})

//create global filter
Vue.filter('camel-case', value => {
	return value.split(' ').map(word => {
		return word[0].toUpperCase() + word.substr(1)
	}).join (' ')
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
