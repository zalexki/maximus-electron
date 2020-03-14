<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
  import Home from '@/pages/Home';

  export default {
    name: 'App',
    components: {
      Home
    },
  };
</script>

<style lang="scss">
body {
  min-width: 100%;
  min-height: 100%;
  background-color: #4D4D4D;
}
</style>
