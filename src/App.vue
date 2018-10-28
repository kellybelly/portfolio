<template>
  <div id="app" class="container">
    <div id="header">
      <router-link to="/"><h1>Kelly Tran</h1></router-link>
      <div class="nav">
        <router-link to="/">About</router-link>
        <router-link to="/work">Work</router-link>
      </div>
    </div>

    <router-view/>

    <div id="footer">
      <span>&copy; 2018 Kelly Tran</span>
      <div class="nav">
        <a href="mailto:kelly.v.tran@gmail.com">Email</a>
        |
        <a href="https://github.com/kellybelly">GitHub</a>
        |
        <a href="https://www.linkedin.com/in/kelly-tran-765b227a/">LinkedIn</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import './styles/globals.scss';
  @import './styles/base.scss';
</style>
