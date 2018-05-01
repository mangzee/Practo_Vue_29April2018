<template>
  <div>
      <router-link to="/th1">H1</router-link> | 
      <router-link to="/th2">H2</router-link>
      <transition name="slide">
          <router-view></router-view>
      </transition>
      <input v-model="newtask">
      <button @click="$store.dispatch('addTodo', {task: newtask})">ADD</button>
      <ul>
          <TodoListItem 
          v-for="todo in todos" 
          v-bind:key="todo.id"
          v-bind:todo="todo">
          </TodoListItem>
      </ul>
  </div>
</template>
<script>
import TodoListItem from '../components/TodoListItem'
export default {
    data() {
        return {
            newtask: 'Add New Task here',
        }
    },
    computed: {
        todos() {
            console.log(this.$store)
            return this.$store.state.todos
        }
    },
    // methods: {
    //     addTodo() {
    //         this.$store.commit('addTodo', {task: this.newtask})
    //     }
    // },
    components: {
        TodoListItem
    }
}
</script>

