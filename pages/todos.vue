<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <span class="remove" @click="remove(todo)"> X</span>
    </li>
    <li><input placeholder="新增TODO" @keyup.enter="addTodo"></li>
  </ul>
</template>

<script>
import axios from 'axios'
import { mapState, mapMutations } from 'vuex'

export default {
  async asyncData ({ store }) {
    const res = await axios.get('https://api.myjson.com/bins/1fq7k7')
    res.data.todos.map(todo => {
      store.commit('todos/add', todo.text)
    })
  },
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
      'add',
      'remove'
    ])
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}

.remove {
  cursor: pointer;
  color: red;
}
</style>
