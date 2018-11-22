import Vue from 'vue';
import greeting from '@/components/greeting.vue';

export default Vue.extend({
  name: 'confirmAuth',
  components: {
    greeting,
  },
  props: {
    loginName: String,
  },
  computed: {
    },
});
