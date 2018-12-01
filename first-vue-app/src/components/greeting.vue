<template>
<div class="welcome__text">Hi, nice to see you again, {{ loginName }}!</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'greeting',
  computed: {
    loginName(): string {
      return this.$store.state.login;
    },
  },
});
</script>
