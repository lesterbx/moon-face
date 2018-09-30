<template>
    <div class="button location-button" v-if="location">
        <i class="icon-location"></i>{{location.city}}
    </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        location: null
      }
    },
    mounted () {
      axios.get('https://get.geojs.io/v1/ip/geo.json')
        .then(({ data }) => this.location = data)
    }
  }
</script>

<style scoped>
    .location-button {
        position: absolute;
        top: 1em;
        left: 1em;
        padding-right: 1em;
    }
</style>
