<template>
    <div class='header'>
        <div class='header__inner'>
            <div class='navbuttons'>
                <navigation class='btn__blue' viewName='Home' to="/"></navigation>
                <navigation class='btn__green' viewName='Log In' to="/signIn"></navigation>
            </div>
            <div class='header__greeting'>Welcome to my CakeShop!</div>
            <div class='header__logo'>
                <img alt="logo" src="@/assets/cake_logo.png">
            </div>

        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import navigation from '@/components/navigation.vue';

export default Vue.extend({
  name: 'header',
  components: {
    navigation,
  },
});
</script>