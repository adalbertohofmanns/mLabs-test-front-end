<template>
  <span> {{ dateTimeString }} </span>
</template>

<script>
  import moment from 'moment';
  export default {
    data () {
      return {
        dateTimeString: ''
      }
    },

    created () {
      setInterval(() => {
        moment.locale('pt-br');
        this.dateTimeString = moment().format('L HH:mm:ss');
      })
    }

  };
</script>

