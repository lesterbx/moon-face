<template>
    <div class="button date-button">
        <i class="icon-calendar-empty"></i>
        <input v-model="dateSt" id="date" type="date" required="true">
    </div>
</template>

<script>
  import moment from 'moment'

  export default {
    name: 'DateButton',
    props: ['date'],
    computed: {
      dateSt: {
        get () {
          return moment(this.date).format('YYYY-MM-DD')
        },
        set (date) {
          if (date) {
            this.$emit('dateChanged', moment(date, 'YYYY-MM-DD'))
          }
        }
      }
    },
  }
</script>

<style scoped>
    .date-button {
        position: absolute;
        top: 1em;
        right: 1em;
    }

    input[type="date"] {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        background-color: transparent;
        color: #fff;
        border: none;
        font-size: 1em;
    }
</style>
