<template>
    <div id="sky"></div>
</template>

<script>
  import SVG from 'svg.js'
  import utils from '../utils'

  let width = null
  let height = null
  let maxWidth = null
  let maxHeight = null
  let stars = null
  export default {
    name: 'Sky',
    mounted () {
      this.getBodySize()
      this.paintSky()
      if (utils.isMobile.any()) {
        window.addEventListener('deviceorientation', this.deviceRotated, true)
      } else {
        window.addEventListener('mousemove', this.mouseMoved)
      }
      window.addEventListener('resize', this.windowResized)
      maxWidth = document.querySelector('body').offsetWidth
      maxHeight = document.querySelector('body').offsetHeight
    },
    methods: {
      paintSky () {
        const draw = SVG('sky').size('100%', '100%')
        const gradient = draw.gradient('linear', function (stop) {
          stop.at(0, '#050050')
          stop.at(1, '#11141d')
        })
        gradient.from(0, 0).to(0, 1)
        const rect = draw.rect('100%', '100%')
        rect.fill(gradient)
        stars = draw.group()
        this.paintStars({ number: 100, minX: 0, maxX: width, minY: 0, maxY: height })
      },
      paintStars ({ number, minX, maxX, minY, maxY }) {
        for (let i = 0; i < number; i++) {
          stars.circle(utils.random(0, 5))
            .fill('#EEE')
            .move(utils.random(minX, maxX), utils.random(minY, maxY))
        }
      },
      mouseMoved ({ clientX, clientY }) {
        const middleX = width / 2
        const middleY = height / 2
        if (stars) {
          stars.animate().move(
            utils.mapRange(middleX - clientX, 0, middleX, -5, 5),
            utils.mapRange(middleY - clientY, 0, middleY, -5, 5)
          )
          stars.finish()
        }

      },
      deviceRotated ({ absolute, alpha, beta, gamma }) {
        if (stars) {
          stars.animate().move(
            utils.mapRange(beta, -180, 180, -100, 100),
            utils.mapRange(gamma, -180, 180, -100, 100)
          )
          stars.finish()
        }
      },
      windowResized () {
        this.getBodySize()
        let minX = 0
        let maxX = width
        let minY = 0
        let maxY = height
        if (width > maxWidth) {
          minX = maxWidth
        }
        if (height > maxHeight ) {
          minY = maxHeight
        }
        if (width > maxWidth || height > maxHeight) {
          this.paintStars({ number: 1, minX, maxX, minY, maxY })
          maxWidth = document.querySelector('body').offsetWidth
          maxHeight = document.querySelector('body').offsetHeight
        } else {
          stars.size(width, height)
        }
      },
      getBodySize () {
        width = document.querySelector('body').offsetWidth
        height = document.querySelector('body').offsetHeight
      }
    }
  }
</script>

<style scoped>
    #sky {
        height: 100%;
        width: 100%;
    }
</style>
