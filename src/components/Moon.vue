<template>
    <div id="moon"></div>
</template>

<script>
  import SVG from 'svg.js'

  let draw = null
  let moon = null
  export default {
    name: 'Moon',
    mounted () {
      draw = SVG('moon').size('100%', '100%')
      this.moveMoon()
      window.addEventListener('resize', this.moveMoon)
    },
    methods: {
      moveMoon () {
        if (moon) moon.remove()
        if (draw) {
          let width = document.querySelector('body').offsetWidth
          let height = document.querySelector('body').offsetHeight
          let radius = width / 5
          moon = draw.circle(radius).fill('#f2ffa0')
          moon.move((width / 2) - (radius / 2), (height / 2) - (radius / 2) - 100)
        }
      }
    }
  }
</script>

<style scoped>
    #moon {
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
    }
</style>
