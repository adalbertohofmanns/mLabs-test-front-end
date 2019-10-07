<template>
  <section id="app">
      <div id="nav">
        <div><span>23/09/2019 10:56:59</span></div>
        <div><span>MINHA CONTA <a href="javascript:;">v</a></span></div>
        <div><span>*</span></div>
      </div>
      <div id="menu">
        <router-link to="/">Home</router-link>
        <!-- <router-link to="/about">About</router-link> -->
      </div>
      <router-view />
  </section>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
