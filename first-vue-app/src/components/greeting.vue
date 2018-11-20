<template>
<div class="hello">
    <p class="hello__text">Hi! Nice to see you again, {{ loginName }}</p>
</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'greeting',
  props: {
    loginName: String,
  },
});
</script>
