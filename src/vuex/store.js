import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	todoList: [
		{
			id: 1,
			title: 'Do something',
			description: 'Here is the first todo',
			completed: false
		},
		{
			id: 2,
			title: 'Do Another Thing',
			description: 'Here is the second todo',
			completed: false
		},
		{
			id: 3,
			title: 'some long title that will be camel cased and shortened on render',
			description: 'stuff',
			completed: true
		}
	]
}

