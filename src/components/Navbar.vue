<template>
  <nav>
    <router-link class="nav-item" to="/">{{ $t('proverbs') }}</router-link>
    <router-link class="nav-item" to="/insights">{{ $t('insights') }}</router-link>
    <LogoutButton v-if="isLoggedIn" class="nav-item" />
  </nav>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import LogoutButton from './LogoutButton.vue';

export default {
  components: {
    LogoutButton,
  },
  setup() {
    const store = useStore();
    const isLoggedIn = computed(() => store.getters.isLoggedIn);

    return {
      isLoggedIn,
    };
  },
};
</script>

<style scoped>
.nav-item {
  margin-right: 10px;
}
</style>
  