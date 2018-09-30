<template>
    <div class="button date-button">
        <i class="icon-calendar-empty"></i>
        {{this.date.toLocaleDateString()}}
    </div>
</template>

<script>
  export default {
    name: 'DateButton',
    data () {
      return {
        selectedDate: new Date()
      }
    },
    computed: {
      date: {
        get () {
          return this.selectedDate
        },
        set (date) {
          this.selectedDate = date
          this.$emit('dateChanged', date)
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
</style>
