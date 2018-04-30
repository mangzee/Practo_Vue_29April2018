import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      { id: 1, task: 'one' },
      { id: 2, task: 'two' }
    ]
  },
  mutations: {
    addTodo (state, payload) {
      state.todos.push(payload)
    }
  },
  actions: {
    addTodo (context, payload) {
      setTimeout(() => {
        context.commit('addTodo', payload)
      }, 1000)
    }
  }
})
