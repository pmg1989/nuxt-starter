<template>
  <div>
    <div>
      {{ todos.length }}
    </div>
    <ul>
      <li v-for="todo in todos">
        <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
      </li>
      <li><input placeholder="What needs to be done?" @keyup.enter="addTodo"></li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState('todos', {
      todos: state => state.list
    })
  },
  methods: {
    addTodo (e) {
      this.add(e.target.value)
      e.target.value = ''
    },
    ...mapMutations('todos', [
      'toggle',
      'add'
    ])
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
