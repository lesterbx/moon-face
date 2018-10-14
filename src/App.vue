<template>
    <div id="app">
        <sky/>
        <moon :date="date"/>
        <grass/>
        <date-button :date="date" @dateChanged="dateChanged"></date-button>
        <div class="arrow left-arrow" @click="prevDay"><i class="icon-left-open"></i></div>
        <div class="arrow right-arrow" @click="nextDay"><i class="icon-right-open"></i></div>
        <!--<location-button></location-button>-->
    </div>
</template>

<script>
  import Sky from './components/Sky'
  import Grass from './components/Grass'
  import Moon from './components/Moon'
  import DateButton from './components/DateButton'
  import LocationButton from './components/LocationButton'
  import moment from 'moment'

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
      },
      nextDay () {
        this.date = moment(this.date).add(1, 'days').toDate()
      },
      prevDay () {
        this.date = moment(this.date).subtract(1, 'days').toDate()
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
    }

    .arrow {
        position: fixed;
        height: 88vh;
        z-index: 100;
        bottom: 0;
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5em;
    }

    .arrow:hover {
        cursor: pointer;
    }

    .left-arrow {
        left: 0;
    }

    .right-arrow {
        right: 0;
    }
</style>
