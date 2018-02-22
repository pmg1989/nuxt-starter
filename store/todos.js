export const state = () => ({
  list: []
})

export const mutations = {
  add (state, text) {
    const id = state.list.reduce((maxId, todo) => Math.max(todo.id, maxId), 0)
    state.list.push({
      id: id + 1,
      text,
      done: false
    })
  },
  remove (state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle (state, todo) {
    todo.done = !todo.done
  }
}
