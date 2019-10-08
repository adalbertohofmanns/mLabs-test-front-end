<template>
  <section>
    <div class="bd-gray">
      <div class="ml-container ml-header">
        <div class="ml-header-time"><clock></clock></div>
        <div class="ml-header-my-account-link"><a href="">MINHA CONTA<i class="ml-header-my-account-link-down"></i></a></div>
        <div class="ml-header-engine"><div class="ml-header-engine-config"></div></div>
      </div>
    </div>
    <div class="bB">
      <div class="ml-container ml-menu">
        <div class="ml-menu-logo">
          <a href=""><div><img src="./assets/images/logotipo.png" title="mLabs"></div></a>
        </div>
        <nav class="ml-menu-nav"> 
          <ul>
            <li><a href=""><div><img src="./assets/images/dashboard.svg"><p>DASHBOARD</p></div></a></li>
            <li class="ml-new"><a href=""><div><img src="./assets/images/agendamento.svg"><p>AGENDAR POST</p></div></a></li>
            <li><a href=""><div><img src="./assets/images/calendar.svg"><p>CALENDÁRIO</p></div></a></li>
            <li><a href=""><div><img src="./assets/images/inbox.svg"><p>INBOX</p></div></a></li>
            <li><a href=""><div><img src="./assets/images/news.png"><p>FEED</p></div></a></li>
            <li><a href=""><div><img src="./assets/images/conteudo.svg"><p>WORKFLOW</p></div></a></li>
            <li><a href=""><div><img src="./assets/images/acompanhamento.svg"><p>ACOMPANHAMENTO</p></div></a></li>
            <li><a href=""><div><img src="./assets/images/relatorios.svg"><p>RELATÓRIOS</p></div></a></li>
          </ul>
        </nav>
      </div>
    </div>
    <div> 
      <router-view /> 
    </div>
  </section> 
</template>

<script>
// @ is an alias to /src
import Clock from "@/components/Clock.vue";

export default {
  name: "home",
  components: {
    Clock
  }
};
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Exo&display=swap');
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

@font-face
  font-family: 'prime'
  src: local('prime'), url('./assets/fonts/prime_regular-webfont.ttf') format('ttf')
  src: local('prime'), url('./assets/fonts/prime_regular-webfont.woff') format('woff')
  font-weight: normal
  font-style: normal

*
  padding: 0
  margin: 0
  box-sizing: border-box

html, body
  height: 100vh

body
  font-family: 'prime', sans-serif

.bd-gray
  background-color: #3a3a3a

.bg-whitesmoke
  background-color: #f7f7f7

.bB
  border-bottom: 1px solid #d2d3d3

.ml-container
  margin: 0 auto
  max-width: 1200px

.ml-header
  height: 32px
  display: flex
  justify-content: space-between
  color: #fff
  align-items: center
  font-size: 12px

  &-time,
  &-my-account-link,
  &-engine
    width: 33%
    padding: 0 15px

  &-time
    font-family: Arial, Helvetica, sans-serif
    font-size: 12px
    color: #cbcccd
 
  &-my-account-link
    text-align: center

    a
      font-size: 12px
      text-decoration: none
      color: #cbcccd
      position: relative
      padding: 0 10px

  &-my-account-link-down
    margin-left: 10px
    font-size: 16px
    font: normal normal normal 14px/1 FontAwesome

    &::before
      content: "\f107"

  &-engine
    text-align: right
    display: flex
    justify-content: flex-end

    &-config
      width: 16px;
      height: 16px;
      background: url(./assets/images/icons.png) no-repeat -32px -121px;
      position: relative;
      z-index: 10;

.ml-menu
  display: flex
  align-items: flex-end
  justify-content: space-between
  flex-wrap: wrap

  &-logo
    flex: 1

    div
      display: flex

      img
        margin: 0 auto
        padding-bottom: 10px

  &-nav ul
    display: flex
    justify-content: center
    flex-wrap: wrap
    list-style: none

    li
      text-align: center
      min-width: auto
      height: 90px
      display: flex
      justify-content: center
      align-items: flex-end
      padding: 15px 16px 10px

      img
        opacity: 0.5
        -webkit-transition: 0.3s all ease-in
        transition: 0.3s all ease-in

      a
        text-decoration: none
        color: #535353
        // opacity: 0.5
        -webkit-transition: 0.3s all ease-in
        transition: 0.3s all ease-in

        &:hover
          opacity: 1
          color: #e02b4a

          img
            opacity: 1

    .ml-new
      background: url(./assets/images/novo.png) no-repeat 95px 15px

.ml-content
  padding: 40px 0

  ul
    display: flex
    flex-wrap: wrap
    list-style: none

    li
      text-align: center
      min-width: 222px
      min-height: 218px
      border: dotted 2px #d2d3d3
      background-color: #eff0f0
      padding: 30px
      display: flex
      align-items: center
      flex-direction: column
      justify-content: center
      -webkit-transition: 0.3s all ease-in
      transition: 0.3s all ease-in

      &:hover
        transform: scale(1.1)
        border: none
        -webkit-box-shadow: 0px 0px 54px 0px rgba(0,0,0,0.75)
        -moz-box-shadow: 0px 0px 54px 0px rgba(0,0,0,0.75)
        box-shadow: 0px 0px 54px 0px rgba(0,0,0,0.75)

      img.social-logo
        width: 57px
        height: 57px

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
        border-radius: 5px

</style>