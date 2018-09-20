<template>
    <div class="grass-wrapper"></div>
</template>

<script>
  import SVG from 'svg.js'
  import utils from '../utils'
  import grass from '../vectors/grass'

  export default {
    name: 'Grass'
  }
</script>

<style scoped>
    .grass-wrapper{
        height: 100%;
        width: 100%;
        background: url("../assets/grass.svg");
        background-origin: content-box;
        background-position: bottom;
        background-repeat: repeat-x;
        position: absolute;
        left: 0;
        bottom:-50px;
    }
</style>
