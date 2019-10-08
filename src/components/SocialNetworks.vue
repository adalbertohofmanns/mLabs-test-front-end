<template>
  <section class="bg-whitesmoke">
    <div class="ml-container ml-content">
      <ul class="ml-social" id="ml-social">
        <li v-for="network in networks" class="ml-social-network">
          <img class="social-question" src="../assets/images/question.png">
          <img class="social-logo" src="../assets/images/facebook.png">
          <p>{{ network.name }}</p>
          <button>Adicionar</button>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
 import moment from 'moment';
  export default {
    data () {
      return {
        networks: [
          {name: 'FACEBOOK'},
          {name: 'TWITTER'},
          {name: 'INSTAGRAM'},
          {name: 'GOOGLE MEU NEGÓCIO'},
          {name: 'PINTEREST'},
          {name: 'LINKEDIN'},
          {name: 'YOUTUBE'},
          {name: 'WHATSAPP'},
          {name: 'GOOGLE ANALYTICS'},
        ]
    }
  }

};
</script>
