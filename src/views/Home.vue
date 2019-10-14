<template>
  <section class="bg-whitesmoke">
    <div class="ml-container ml-content">
      <div class="ml-social" id="ml-social">
        <div class="ml-social-network">
          <img class="social-question" src="../assets/images/question.png">
          <img class="social-logo" src="../assets/images/facebook.png">
          <p>FACEBOOK</p>
          <button>Adicionar</button>
        </div>
        <div class="ml-social-network">
          <img class="social-question" src="../assets/images/question.png">
          <img class="social-logo" src="../assets/images/twitter.png">
          <p>TWITTER</p>
          <button>Adicionar</button>
        </div>
        <div class="ml-social-network">
          <img class="social-question" src="../assets/images/question.png">
          <img class="social-logo" src="../assets/images/instagram.png">
          <p>INSTAGRAM</p>
          <button>Adicionar</button>
        </div>
        <div class="ml-social-network">
          <img class="social-question" src="../assets/images/question.png">
          <img class="social-logo" src="../assets/images/google.png">
          <p>GOOGLE MEU NEGÓCIO</p>
          <button>Adicionar</button>
        </div>
        <div class="ml-social-network">
          <img class="social-question" src="../assets/images/question.png">
          <img class="social-logo" src="../assets/images/pinterest.png">
          <p>PINTEREST</p>
          <button>Adicionar</button>
        </div>
        <div class="ml-social-network">
          <img class="social-question" src="../assets/images/question.png">
          <img class="social-logo" src="../assets/images/linkedin.png">
          <p>LINKEDIN</p>
          <button>Adicionar</button>
        </div>
        <div class="ml-social-network">
          <img class="social-question" src="../assets/images/question.png">
          <img class="social-logo" src="../assets/images/youtube.png">
          <p>YOUTUBE</p>
          <button>Adicionar</button>
        </div>
        <div class="ml-social-network">
          <img class="social-question" src="../assets/images/question.png">
          <img class="social-logo" src="../assets/images/whatsapp.png">
          <p>WHATSAPP</p>
          <button>Adicionar</button>
        </div>
        <div class="ml-social-network">
          <img class="social-question" src="../assets/images/question.png">
          <img class="social-logo" src="../assets/images/analytics.png">
          <p>GOOGLE<br>ANALYTICS</p>
          <button>Adicionar</button>
        </div>
      </div>
    </div>
    <div class="ml-modal">
      <div class="ml-modal-container">
        <div class="ml-modal-header">
          <div class="ml-modal-header-title">
            <div class="ml-modal-header-title-social">
              <img src="../assets/images/facebook.png" alt="texto alternativo">
              <div class="ml-modal-header-icon"></div>
              <span>Vincular página do Facebook</span>
            </div>
            <a href="javascript:;" class="ml-modal-header-close">X</a>
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
            <li>
              <div class="ml-modal-body-icon">
                <img src="../assets/images/facebook.png" alt="texto alternativo">
                <div class="ml-modal-body-text">
                  <p>
                    <strong>nome da pagina</strong><br>
                    <a href="link da pagina">link da pagina</a>
                  </p>
                </div>
              </div>
              <input type="radio" name="1" id="1">
            </li>
            <li>
              <div class="ml-modal-body-icon">
                <img src="../assets/images/facebook.png" alt="texto alternativo">
                <div class="ml-modal-body-text">
                  <p>
                    <strong>nome da pagina</strong><br>
                    <a href="link da pagina">link da pagina</a>
                  </p>
                </div>
              </div>
              <input type="radio" name="1" id="1">
            </li>
          </ul>
          <div class="ml-modal-body-info">
            Não encontrou sua página?<br><br>
            <a href="link para face">clique para atualizar as permissões do Facebook.</a>
          </div>
        </div>
        <div class="ml-modal-footer">
          <button>VOLTAR</button>
          <button>PRÓXIMO <i class="fa fa-long-arrow-right"></i></button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass">
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css")

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

  &:active
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