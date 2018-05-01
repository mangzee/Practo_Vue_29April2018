<template>
  <li :class="'cl1 ' + (todo.id == 1 ? 'cl2' : '')">{{todo.task}}</li>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: ['todo'],
}
</script>

<style lang="scss" scoped>
    li {
        font-weight: 900;
    }
    .cl1 {
        color: red;
    }
</style>

