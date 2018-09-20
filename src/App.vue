<template>
    <div id="app">
        <sky/>
        <moon/>
        <grass/>
    </div>
</template>

<script>
  import Sky from './components/Sky'
  import Grass from './components/Grass'
  import Moon from './components/Moon'

  export default {
    name: 'app',
    components: {
      Moon,
      Grass,
      Sky
    }
  }
</script>

<style>
    body {
        padding: 0;
        margin: 0;
        overflow: hidden;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        height: 100vh;
        width: 100%;
        overflow: hidden;
    }
</style>
