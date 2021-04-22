<template>
    <div id="list-rendering">
        <ol>
            <li v-for="todo in todos" :key="todo.text">
                {{ todo.text }}
            </li>
        </ol>
    </div>
</template>

<script>
export default {
  name: 'ListRendering',
  data() {
    return {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  },
}
</script>

<style scoped>
#list-rendering {
    text-align: left;
}
</style>