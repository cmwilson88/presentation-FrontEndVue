<template>
	<div>
		<app-todo-inputs
			@todoAdded="addTodoItem">
		</app-todo-inputs>

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
		components: {
			appTodoInputs: TodoInputs,
			appTodoItem: TodoItem
		},
		methods: {
			addTodoItem(val) {
				console.log('addTodoItem')
				this.todoList.push(val)
			}
		}
	}
</script>