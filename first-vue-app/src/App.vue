<template>
  <div id="app">
    <div class="wrapper">
      <div class='header'>
        <div class='header__inner'>
          <div class='navbuttons'>
            <router-link to="/" class='btn btn__blue'><span class='btn__text'>Home</span></router-link>
            <router-link to="/signIn" class='btn btn__green'><span class='btn__text'>Log In</span></router-link>
          </div>
          <div class='header__greeting'>Welcome to my CakeShop!</div>
          <div class='header__logo'>
            <img alt="logo" src="@/assets/cake_logo.png">
          </div>

        </div>
      </div>
      <router-view />

    </div>
  </div>
</template>


<style lang="scss" src="./styles/main.scss">
</style>