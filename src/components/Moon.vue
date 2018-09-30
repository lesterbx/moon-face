<template>
    <div id="moon"></div>
</template>

<script>
  import SVG from 'svg.js'
  import utils from '../utils'
  import SunCalc from 'suncalc'

  let draw = null
  let moon = null
  let shadow = null
  export default {
    name: 'Moon',
    props: ['date'],
    computed: {
      moonInfo () {
        return SunCalc.getMoonIllumination(this.date)
      }
    },
    watch: {
      date (newDate, olDate) {
        this.paintMoon()
      }
    },
    mounted () {
      draw = SVG('moon').size('100%', '100%')
      this.paintMoon()
      window.addEventListener('resize', this.paintMoon)
    },
    methods: {
      paintMoon () {
        if (moon) moon.remove()
        if (shadow) shadow.remove()
        if (draw) {
          let width = document.querySelector('body').offsetWidth
          let height = document.querySelector('body').offsetHeight
          let radius = width / 5

          if (width < 750) radius = width / 3
          if (width < 500 || utils.isMobile.any()) radius = width / 2

          let cx = (width / 2) - (radius / 2)
          let cy = (height / 2) - (radius / 2)

          if (height > 500) cy -= 100
          shadow = draw.path(this.getPath(radius / 2, { fraction: 1, phase: 0.97 })).fill('#151515')
          moon = draw.path(this.getPath(radius / 2, this.moonInfo)).fill('#dfe1b7')
          moon.move(cx, cy)
          shadow.move(cx, cy)
        }
      },
      getPath (radius, moonInfo) {
        const kappa = 4 * ((Math.sqrt(2) - 1) / 3)
        let offsetRight = 0 //offset right
        let offsetLeft = 0 //offset left
        if (moonInfo.phase > 0.48 && moonInfo.phase < 0.52) {
          radius += 20
        }
        if (moonInfo.phase > 0.97 || moonInfo.phase < 0.02) {
          return ''
        } else if (moonInfo.phase < 0.5) {
          offsetLeft = (radius * 2) - ((radius * 2) * moonInfo.fraction)
        } else {
          offsetRight = (radius * 2) - ((radius * 2) * moonInfo.fraction)
        }
        return `M${offsetLeft} ${radius}
                C ${offsetLeft} ${radius - radius * kappa}, ${(radius - radius * kappa) + offsetLeft / 2} 0, ${radius} 0
                C ${(radius + radius * kappa) - offsetRight / 2} 0, ${2 * radius - offsetRight} ${radius - radius * kappa}, ${2 * radius - offsetRight} ${radius}
                C ${2 * radius - offsetRight} ${radius + radius * kappa},${(radius + radius * kappa) - offsetRight / 2} ${2 * radius}, ${radius} ${2 * radius}
                C ${(radius - radius * kappa) + offsetLeft / 2} ${2 * radius}, ${offsetLeft} ${radius + radius * kappa}, ${offsetLeft} ${radius}`
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
