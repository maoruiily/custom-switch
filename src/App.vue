<template>
  <div id="app">
    <custom-switch v-model="lightSwitch" align="center">开关:</custom-switch>
  </div>
</template>

<script>

  export default {
    name: 'app',
    data() {
      return {
        lightSwitch: true
      }
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>
