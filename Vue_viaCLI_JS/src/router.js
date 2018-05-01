import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import TodoList from './views/TodoList.vue'
import TLH1 from './views/TodoList/TodoListHeading1.vue'
import TLH2 from './views/TodoList/TodoListHeading2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/todos',
      name: 'todos',
      component: TodoList,
      children: [
        {
          path: '/th1',
          name: 'todos_h1',
          component: TLH1
        },
        {
          path: '/th2',
          name: 'todos_h2',
          component: TLH2
        }
      ]
    }
  ]
})
