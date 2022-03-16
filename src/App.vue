<template>
  <div id="app">
    <List />
  </div>
</template>

<script>
import List from '@/components/List.vue';
export default {
  name: 'App',
  components: {
    List,
  },
};
</script>

<style>
#app {
  width: 100%;
  height: 100vh;
  max-width: 760px;
  margin: 1rem auto;
}
</style>
