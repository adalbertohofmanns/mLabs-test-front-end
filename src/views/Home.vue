<template>
  <section class="bg-whitesmoke">
    <div class="ml-container ml-content">
      <div class="ml-social" id="ml-social">
        <div v-for="network in socialBox" v-bind:key="network.id" class="ml-social-network">
          
          <div v-if="network.pages >= 0 " class="ml-social-network-conected-not" >
            <img class="social-question" src="../assets/img/question.png">
            <img class="social-logo" :src="network.image" :alt="network.image">
            <p>{{network.name}}</p>
            <button @click="sendInfo(network)" v-on:click="activateModal = true">Adicionar</button>
          </div>
          
          <div v-else :class="network.class">
            <div class="ml-background">
              <header><span>{{ network.pages[0][0].name }}</span></header>
              <div class="ml-icon">
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div id="mlModal" class="ml-modal" v-bind:class="{'ml-modal-active': activateModal}">
      <div class="ml-modal-container">
        <div class="ml-modal-header">
          <div class="ml-modal-header-title">
            <div class="ml-modal-header-title-social">
              <img :src="selectedSocial.image" :alt="selectedSocial.name">
              <div class="ml-modal-header-icon"></div>
              <span>{{selectedSocial.title}}</span>
            </div>
            <a href="javascript:;" v-on:click="activateModal = false" class="ml-modal-header-close">X</a>
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
              <li v-if="page.channel_key == selectedSocial.name">
                <div class="ml-modal-body-icon">
                  <img :src="page.picture" :alt="page.name">
                  <div class="ml-modal-body-text">
                    <p>
                      <strong>{{page.name}}</strong><br>
                      <a :href="page.url">{{page.url}}</a>
                    </p>
                  </div>
                </div>
                <input type="radio" name="newPage" v-model="newPage" :data-name="page.name" :value="page" :id="page.id" />
              </li>
            </div>
          </ul>
          <div v-if="!notSelected" class="ml-modal-body-info">
            Não encontrou sua página?<br><br>
            <a href="javascript:;">clique para atualizar as permissões.</a>
          </div>
          <div v-if="notSelected" class="ml-modal-body-info">
            Escolha uma Página
          </div>
        </div>
        <div class="ml-modal-footer">
          <button v-on:click="activateModal = false">VOLTAR</button>
          <button :data-social="selectedSocial.class" v-on:click="addPage">PRÓXIMO <i class="fa fa-long-arrow-right"></i></button>
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
      activateModal: false,
      selectedSocial: '',
      pages: [],
      conectedPages: [],
      newPage: null,
      notSelected: false,
      networks: [
        {pages: [], class: 'facebook', name: 'facebook', title: 'Adicionar Facebook', image: 'https://app.mlabs.com.br/assets/channels/facebook_dashboard_logoff.png'},
        {pages: [], class: 'twitter', name: 'twitter', title: 'Adicionar twitter', image: 'https://app.mlabs.com.br/assets/channels/twitter_dashboard_logoff.png'},
        {pages: [], class: 'instagram', name: 'instagram', title: 'Adcionar Instagram', image: 'https://app.mlabs.com.br/assets/channels/instagram_dashboard_logoff.png'},
        {pages: [], class: 'google', name: 'google meu negócio', title: 'Adicionar Google Meu Negócio', image: 'https://app.mlabs.com.br/assets/channels/google_my_business_dashboard_logoff.png'},
        {pages: [], class: 'pinterest', name: 'pinterest', title: 'Adicionar Pinterest', image: 'https://app.mlabs.com.br/assets/channels/pinterest_dashboard_logoff.png'},
        {pages: [], class: 'linkedin', name: 'linkedin', title: 'Adicionar Linkedin', image: 'https://app.mlabs.com.br/assets/channels/linkedin_dashboard_logoff.png'},
        {pages: [], class: 'youtube', name: 'youtube', title: 'Adicionar Youtube', image: 'https://app.mlabs.com.br/assets/channels/youtube_dashboard_logoff.png'},
        {pages: [], class: 'whatsapp', name: 'whatsapp', title: 'Adicionar Whatsapp', image: 'https://app.mlabs.com.br/assets/channels/whatsapp_dashboard_logoff.png'},
        {pages: [], class: 'analytics', name: 'google analytics', title: 'Adicionar Analytics', image: 'https://app.mlabs.com.br/assets/channels/analytics_dashboard_logoff.png'},
      ],
      socialBox: JSON.parse(localStorage.getItem('networks'))
    }
  },

  beforeMount() {
    axios.get('http://demo1802281.mockable.io/pages')
    .then(response => {
      this.pages = response.data;
      if (localStorage.networks) return true;
      const parsed = JSON.stringify(this.networks);
      localStorage.setItem('networks', parsed);
      setTimeout(() => document.location.reload(true), 900);
    })
    .catch(e => {
      this.errors.push(e)
    })
  },

  methods: {
    sendInfo(network) {
      this.selectedSocial = network;
    },

    addPage (newPage) {
      if (!this.newPage) {
        this.notSelected = true;
        return; 
      };
      this.conectedPages.push(this.newPage);
      this.renderComponent = false;
      this.savePages();
    },

    savePages(newPage) {
      //data-social button
      let btnDataSocial = event.target.getAttribute('data-social')

      // Find Selected network from array
      let getPage = this.networks.find(page => page.class == this.newPage.channel_key);
      // get all Socialnetworks from localStorage
      let pageGeted = JSON.parse(localStorage.getItem('networks'));
      
      // Filtering all socialNetworks by selected
      let currentSocial = pageGeted.filter(function(obj){
        return obj.class == btnDataSocial;
      });
      
      // Get position of selected oi socialNetworks
      let position = pageGeted.map(function(pos){
        return pos.class;
      }).indexOf(btnDataSocial);

      // Pushing page to the selected socialNetwork
      currentSocial[0].pages.push(this.conectedPages);

      // Array completed, selected social with his page
      pageGeted.splice(position, 1, currentSocial[0]);

      //saving to localStorage
      localStorage.setItem("networks", JSON.stringify(pageGeted));
      setTimeout(() => (this.activateModal = false), 500);
      this.newPage = "";
      setTimeout(() => document.location.reload(true), 900);
    },

    removePage(index) {
      this.conectedPages.splice(index, 1);
      this.savePages();
    }
  }
};
</script>

<style lang="sass">
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css")


.ml-content
  padding: 40px 0

.facebook
  background: url(https://app.mlabs.com.br/assets/channels/facebook_dashboard_logged.png) no-repeat 10px 40px #3A589B

.twitter
  background: url(https://app.mlabs.com.br/assets/channels/twitter_dashboard_logged.png) no-repeat 10px 40px #28AAE1

.instagram
  .ml-background
    background-image: linear-gradient(46deg, #FEC35F 0%, #E5385C 49%, #A435B8 100%)
    .ml-icon
      background: url(https://app.mlabs.com.br/assets/channels/instagram_dashboard_logged.png) no-repeat 10px 0px
      width: 80px
      height: 80px
      background-size: 100px

.google
  .ml-background
    background-image: linear-gradient(45deg, #4c8bf5, #495ab9)
    .ml-icon
      background: url(https://app.mlabs.com.br/assets/channels/google_my_business_dashboard_logged.png) no-repeat 10px 10px
      width: 80px
      height: 80px
      background-size: 70px

.pinterest
  background: url(https://app.mlabs.com.br/assets/channels/pinterest_dashboard_logged.png) no-repeat 10px 40px #AA2529

.linkedin
  background: url(https://app.mlabs.com.br/assets/channels/linkedin_dashboard_logged.png) no-repeat 10px 40px #1A85B7

.youtube
  background: url(https://app.mlabs.com.br/assets/channels/youtube_dashboard_logged.png) no-repeat 10px 40px #cc181e

.whatsapp
  background: url(https://app.mlabs.com.br/assets/channels/whatsapp_dashboard_logged.png) no-repeat 10px 40px  #25D366

.analytics
  background: url(https://app.mlabs.com.br/assets/channels/analytics_dashboard_logged.png) no-repeat 10px 40px  #F27902


.facebook,
.twitter,
.instagram,
.google,
.pinterest,
.linkedin,
.youtube,
.whatsapp,
.analytics,
  background-size: 100px
  width: 100%
  height: 100%
  -webkit-transition: 0.2s all ease-in-out
  transition: 0.2s all ease-in-out

  &:hover
    transform: scale(1.1)
    box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.2)

  header
    color: #fff
    padding: 10px 20px
    background-color: rgba(0,0,0,.2)

  .ml-background
    width: 100%
    height: 100%

.ml-social
    display: flex
    flex-wrap: wrap
    list-style: none
    justify-content: center

    &-network-conected-not
      display: flex
      align-items: center
      flex-direction: column

    &-network
      text-align: center
      min-height: 226px
      border: 2px dotted #cbcccd
      background-color: #eff0f0
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
        text-transform: uppercase

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
        background: url(../assets/img/conectar-bar.svg)
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
