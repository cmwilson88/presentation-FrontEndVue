<template>
	<div>
		<app-todo-inputs></app-todo-inputs>
		<app-todo-item
			v-for="todo in todoList"
			:todo="todo">	
		</app-todo-item>
	</div>
</template>


<script>
	import TodoInputs from './TodoInputs.vue'
	import TodoItem from './TodoItem.vue'
	export default {
		data() {
			return {
				todoList: [
					{
						id: 1,
						title: 'Do something',
						description: 'Here is the first todo'
					},
					{
						id: 2,
						title: 'Do Another Thing',
						description: 'Here is the second todo'
					},
					{
						id: 3,
						title: 'some long title that will be camel cased and shortened on render',
						description: 'stuff'
					}]
			}
		},
		components: {
			appTodoInputs: TodoInputs,
			appTodoItem: TodoItem
		}
	}
</script>