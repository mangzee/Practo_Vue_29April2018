<template>
  <div>
      <h1>{{heading}}</h1>
      <h2>{{smallHeading}}</h2>
    <button @click="doSomething">DO</button>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class TodoList extends Vue {
    heading = "HELLO"
    doSomething() {
        this.heading += "WOW"
    }
    get smallHeading () {
        return this.heading.toLowerCase()
    }
}
</script>
