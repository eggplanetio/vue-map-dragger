<template>
  <div id="app">
    <Dragger></Dragger>
  </div>
</template>

<script>
import Dragger from './components/Dragger.vue';

export default {
  components: { Dragger },
}
</script>

<style>
html, body {
  overflow: hidden;
  background: #a6bac3;
}
</style>
