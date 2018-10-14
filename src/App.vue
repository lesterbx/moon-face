<template>
    <div id="app">
        <sky/>
        <moon :date="date"/>
        <grass/>
        <date-button :date="date" @dateChanged="dateChanged"></date-button>
        <location-button></location-button>
    </div>
</template>

<script>
  import Sky from './components/Sky'
  import Grass from './components/Grass'
  import Moon from './components/Moon'
  import DateButton from './components/DateButton'
  import LocationButton from './components/LocationButton'

  export default {
    name: 'app',
    components: {
      LocationButton,
      DateButton,
      Moon,
      Grass,
      Sky
    },
    data () {
      return {
        date: new Date()
      }
    },
    methods: {
      dateChanged (date) {
        this.date = date
      }
    }
  }
</script>

<style>
    @import 'assets/fontello/css/fontello.css';
    @import 'assets/fontello/css/fontello-codes.css';
    @import 'assets/fontello/css/fontello-embedded.css';
    @import 'assets/fontello/css/animation.css';
    @import 'assets/fontello/css/fontello-ie7.css';
    @import 'assets/fontello/css/fontello-ie7-codes.css';

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
        font-size: 1.2em;
    }

    .button {
        padding: 0.5em;
        color: #fff;
        border: 1px solid #fff;
        border-radius: 3px;
        max-width: 45%;
    }
</style>
