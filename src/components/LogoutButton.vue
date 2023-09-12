<template>
    <button @click="logout">{{ $t('logout') }}</button>
  </template>
  
  <script>
  import { useRouter } from 'vue-router';
  import { useStore } from 'vuex';
  
  export default {
    setup() {
      const router = useRouter();
      const store = useStore();
  
      const logout = async () => {
        await store.dispatch('logout');
        router.push('/login');
      };
  
      return {
        logout,
      };
    },
  };
  </script>
  