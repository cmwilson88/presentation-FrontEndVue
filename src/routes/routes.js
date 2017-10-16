import App from '../App.vue';
import Home from '../components/Home/Home.vue'
import TodoApp from '../components/TodoApp/TodoApp.vue'
import TodoList from '../components/TodoApp/TodoList.vue'
import DetailedTodo from '../components/TodoApp/DetailedTodo.vue'
import ImageGalleryApp from '../components/ImageGallery/ImageGalleryApp.vue'

export const routes = [
	{
		path: '/',
		component: Home,
		children: [
		]
	},
	{
		path: '/todo',
		component: TodoApp,
		children: [
			{
				path: '',
				component: TodoList
			},
			{
				path: ':id',
				component: DetailedTodo
			}
		]
	},
	{
		path: '/gallery',
		component: ImageGalleryApp
	},
	{ path: '*', redirect: '/' }

]