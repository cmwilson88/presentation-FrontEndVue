<template>
	<div class="todo_item">
		<div>
			<button @click="cleared = !cleared">&#10003;</button>
			<button> Edit </button>
		</div>
		<p 
			class="todo_title"
			:class="{todo_cleared: cleared}">
			{{todo.title | camel-case}}	
		</p>
		<button> X </button>
	</div>
</template>

<script>
	export default {
		props: ['todo'],
		data() {
			return {
				cleared: false,

			}
		}
	}
</script>

<style lang="sass">
	.todo_item 
		display: flex;
		justify-content: space-between;
	.todo_title
		width: 70%;
		overflow: hidden
		white-space: nowrap;
		text-overflow: ellipsis;
	.todo_cleared
		color: #333
		text-decoration: line-through
</style>