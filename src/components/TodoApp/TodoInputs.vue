<template>
	<form class="todo_form">
		<label>Title</label>
		<input type="text" v-model="newTodo.title">
		<label>Description</label>
		<textarea 
			v-model="newTodo.description" 
			name="" 
			id="" 
			cols="30" 
			rows="10"></textarea>
		<button @click.prevent="emitTodoAdded">Submit</button>
	</form>
</template>

<script>
	export default {
		data() {
			return {
				newTodo: {
					id: 4,
					title: '',
					description: '',
				}
			}
		},
		methods: {
			emitTodoAdded() {
				this.$emit('todoAdded', Object.assign({}, this.newTodo))
				this.newTodo.title = '';
				this.newTodo.description = '';
				this.newTodo.id++;
			}
		}
	}
</script>

<style lang="sass">
	.todo_form
		display: flex
		flex-direction: column
</style>