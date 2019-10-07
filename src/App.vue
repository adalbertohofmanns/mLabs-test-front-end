<template>
  <section>
    <div class="bd-gray">
      <div class="ml-container ml-header">
        <div class="ml-header-time"><span>23/09/2019 10:56:59</span></div>
        <div class="ml-header-my-account-link"><span>MINHA CONTA <a href="javascript:;">v</a></span></div>
        <div class="ml-header-engine"><span>*</span></div>
      </div>
    </div>
    <div>
      <router-view /> 
    </div>
  </section> 
</template>
<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Exo&display=swap');

*
  padding: 0
  margin: 0
  box-sizing: border-box

html, body
  height: 100vh

body
  font-family: 'Exo', sans-serif

.bd-gray
  background-color: #3a3a3a

.bg-whitesmoke
  background-color: #f7f7f7

.bB
  border-bottom: 1.5px solid #d2d3d3

.ml-container
  margin: 0 auto
  max-width: 1190px

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
 
  &-my-account-link
    text-align: center

    a
      font-size: 9px
      text-decoration: none
      color: #fff
      position: relative
      bottom: 3px
      padding: 0 10px

  &-engine
    text-align: right
    font-size: 32px
    top: 5px
    position: relative

    
</style>