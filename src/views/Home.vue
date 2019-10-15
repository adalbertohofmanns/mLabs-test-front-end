<template>
  <section class="bg-whitesmoke">
    <div class="ml-container ml-content">
      <div class="ml-social" id="ml-social">
        <div v-for="network in networks" v-bind:key="network.id" class="ml-social-network">
          <img class="social-question" src="../assets/images/question.png">
          <img class="social-logo" :class="network.name.toLowerCase()" :src="network.image" :alt="network.image">
          <p>{{network.name}}</p>
          <button id="activateName" @click="sendInfo(network)" v-on:click="activate = true">Adicionar</button>
        </div> 
      </div>
    </div>
    <div id="mlModal" class="ml-modal" v-bind:class="{'ml-modal-active': activate}">
      <div class="ml-modal-container">
        <div class="ml-modal-header">
          <div class="ml-modal-header-title">
            <div class="ml-modal-header-title-social">
              <img :src="socialName.image" :alt="socialName.name">
              <div class="ml-modal-header-icon"></div>
              <span>{{socialName.title}} </span>
            </div>
            <a href="javascript:;" v-on:click="activate = false" class="ml-modal-header-close">X</a>
          </div>
          <div class="ml-modal-header-progress">
            <div class="ml-modal-header-progress-container">
              <div class="ml-modal-header-progress-bar"></div>
              <div class="ml-modal-header-progress-bar-color"></div>
              <ul>
                <li>Perfis</li>
                <li>Segmento</li>
                <li>Concorrentes</li>
              </ul>
            </div>
            <span>Selecione a página que deseja vincular a este perfil</span>
          </div>
        </div>
        <div class="ml-modal-body">
          <ul>
            <div v-for="page in pages" v-bind:key="page.id">
              <li v-show="page.name">
                <div class="ml-modal-body-icon">
                  <img :src="page.picture" :alt="page.name">
                  <div class="ml-modal-body-text">
                    <p>
                      <strong>{{page.name}}</strong><br>
                      <a :href="page.url">{{page.url}}</a>
                    </p>
                  </div>
                </div>
                <input type="radio" name="ml_conect_page" :id="page.id">
              </li>
            </div>
          </ul>
          <div class="ml-modal-body-info">
            Não encontrou sua página?<br><br>
            <a href="javascript:;">clique para atualizar as permissões.</a>
          </div>
        </div>
        <div class="ml-modal-footer">
          <button v-on:click="activate = false">VOLTAR</button>
          <button>PRÓXIMO <i class="fa fa-long-arrow-right"></i></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import axios from 'axios';
  export default {
    data () {
      return {
        activate: false,
        socialName: '',
        pages: [],
        networks: [
          {name: 'FACEBOOK', title: 'Adicionar Facebook', image: 'https://app.mlabs.com.br/assets/channels/facebook_dashboard_logoff.png'},
          {name: 'TWITTER', title: 'Adicionar twitter', image: 'https://app.mlabs.com.br/assets/channels/twitter_dashboard_logoff.png'},
          {name: 'INSTAGRAM', title: 'Adcionar Instagram', image: 'https://app.mlabs.com.br/assets/channels/instagram_dashboard_logoff.png'},
          {name: 'GOOGLE MEU NEGÓCIO', title: 'Adicionar Google Meu Negócio', image: 'https://app.mlabs.com.br/assets/channels/google_my_business_dashboard_logoff.png'},
          {name: 'PINTEREST', title: 'Adicionar Pinterest', image: 'https://app.mlabs.com.br/assets/channels/pinterest_dashboard_logoff.png'},
          {name: 'LINKEDIN', title: 'Adicionar Linkedin', image: 'https://app.mlabs.com.br/assets/channels/linkedin_dashboard_logoff.png'},
          {name: 'YOUTUBE', title: 'Adicionar Youtube', image: 'https://app.mlabs.com.br/assets/channels/youtube_dashboard_logoff.png'},
          {name: 'WHATSAPP', title: 'Adicionar Whatsapp', image: 'https://app.mlabs.com.br/assets/channels/whatsapp_dashboard_logoff.png'},
          {name: 'GOOGLE ANALYTICS', title: 'Adicionar Analytics', image: 'https://app.mlabs.com.br/assets/channels/analytics_dashboard_logoff.png'},
        ]
      }
    },

    beforeMount() {
      axios.get('https://demo2697181.mockable.io/pages')
      .then(response => {
        this.pages = response.data.data;
      })
      .catch(e => {
        this.errors.push(e)
      })
    },

    methods: {
      sendInfo(network) {
          this.socialName = network;
      },

    }

  };

</script>

<style lang="sass">
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css")


.ml-content
  padding: 40px 0
    
.ml-social
    display: flex
    flex-wrap: wrap
    list-style: none
    justify-content: center

    &-network 
      text-align: center
      min-height: 226px
      border: 2px dotted #cbcccd
      background-color: #eff0f0
      padding: 15px 0px
      display: flex
      align-items: center
      flex-direction: column
      justify-content: center
      -webkit-transition: 0.3s all ease-in
      transition: 0.3s all ease-in

      img.social-logo
        width: 57px
        height: 57px
        border-radius: 100%

      img.social-question
        width: 25px
        height: 25px
        position: relative
        left: 60px
        top: 30px

      p
        font-size: 23px
        color: #535353
        padding-top: 15px

      button
        width: 90px
        height: 30px
        margin-top: 22px
        background-color: #de2e4d
        color: #fff
        font-size: 15px
        border: none
        border-radius: 3px

@media screen and (min-width: 180px) and (max-width: 712px)
  .ml-social-network
    border: 2px dotted #cbcccd
    width: 100% !important

  .ml-social-network:not(:last-child)
    border-bottom: none

@media screen and (min-width: 712px)
  .ml-social-network
    border: 2px dotted #cbcccd
    width: 232px

  .ml-social-network:not(:last-child)
    border-right: none

@media screen and (min-width: 712px) and (max-width: 942px)
  .ml-social-network:nth-child(3n)
    border-right: 2px dotted #cbcccd

  .ml-social-network:nth-child(n+4)
    border-top: none

@media screen and (min-width: 942px) and (max-width: 1174px)
  .ml-social-network:nth-child(5n)
    border-right: none

  .ml-social-network:nth-child(4n)
    border-right: 2px dotted #cbcccd

  .ml-social-network:nth-child(n+5)
    border-top: none

@media screen and (min-width: 1174px)
  .ml-social-network:nth-child(5n)
    border-right: none

  .ml-social-network:nth-child(5n)
    border-right: 2px dotted #cbcccd

  .ml-social-network:nth-child(n+6)
    border-top: none

.ml-modal
  opacity: 0
  visibility: hidden
  position: absolute
  width: 100%
  height: 100%
  top: 0
  left: 0
  z-index: 999
  background: rgba(0,0,0,0.2)
  font-family: 'Arial', sans-serif
  transition: all 1s

  &-active
    opacity: 1
    visibility: visible

  &-container
    width: 600px
    margin: 0 auto
    padding: 0px
    background: #fff
    border-radius: 0 0 4px 4px
    box-shadow: 0 10px 40px 0 rgba(0,0,0,0.3)

  &-header
    &-title
      display: flex
      justify-content: space-between
      align-items: center
      height: 70px
      padding: 10px 20px
      
      img
        width: 35px
        height: 35px
        margin-right: 20px

      &-social
        display: flex
        align-items: center
        font-size: 24px
        font-weight: normal

    &-close
      text-decoration: none
      color: #80868a

    &-progress
      text-align: center
      font-weight: bold

      &-container
        margin: 30px auto 40px auto
        width: 249px
        height: 10px
        position: relative
        background: #bdbdbd
        clear: both

        ul
          padding-top: 5px
          width: 298px
          margin-left: -11px
          display: flex
          justify-content: space-between

          li:nth-child(2n)
            padding-left: 15px

          li
            display: inline-block
            font-family: 'Arial', sans-serif
            font-weight: bold
            font-size: 12px
            color: #BBB

      &-bar
        width: 100%
        height: 100%
        background: url(../assets/images/conectar-bar.svg)
        position: relative
        z-index: 10

      &-bar-color
        width: 12px
        height: 100%
        background: #4094FF
        position: absolute
        top: 0
        left: 0
        z-index: 9
        -webkit-transition: width 1s
        transition: width 1s
        border-radius: 100px

  &-body
    text-align: center
    padding: 0 30px

    ul
      overflow-y: auto
      max-height: 280px
      background-color: #efefef
      padding: 10px 20px
      margin-top: 10px

      li
        height: 80px
        display: flex
        justify-content: space-between
        align-items: center
        border-bottom: #fff solid 1px
        
        .ml-modal-body-icon
          display: flex
          justify-content: flex-start
          width: 90%
          align-items: center

        img
          width: 49px
          height: 49px
          margin-right: 20px
          font-size: 7px
          border: solid 1px #000

    &-info
      padding-top: 40px

    &-text
      text-align: left

      strong
        font-size: 15px
      
      a
        font-size: 13px

  &-footer
    height: 80px
    padding: 10px 20px
    display: flex
    justify-content: space-between
    align-items: center
    background-color: #f8f8f8
    margin-top: 60px
    border-radius: 0 0 4px 4px

    button
      font-family: 'prime', sans-serif
      color: #737373
      font-weight: bold
      border: none
      background-color: transparent
      font-size: 14px
      width: 130px
      height: 50px
      border-radius: 8px

    &::focus
      outline: none

    button:last-of-type
      color: #fff
      background-color: #498fe2
      
</style>