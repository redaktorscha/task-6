<template>
    <router-link class='btn'><span class='btn__text'>{{viewName}}</span></router-link>
</template>


<script lang="ts">
import Vue from 'vue';
import router from '../router';

export default Vue.extend({
  name: 'navigation',
  props: {
    viewName: String,
  },
});
</script>
