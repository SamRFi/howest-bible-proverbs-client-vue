<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="email">Email: </label>
      <input type="email" id="email" v-model="email" required>
    </div>
    <div>
      <label for="password">{{ $t('password') }}: </label>
      <input type="password" id="password" v-model="password" required>
    </div>

    <p v-if="errorMessage" style="color: red">{{ errorMessage }}</p>

    <button type="submit">Login</button>
    <div>
      {{ $t('noAccount') }} <router-link to="/register">{{ $t('register') }}</router-link>
    </div>
  </form>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';

export default {
  name: 'LoginForm',
  setup() {
      const { locale } = useI18n();
      const email = ref('');
      const password = ref('');
      const router = useRouter();
      const store = useStore();
      const errorMessage = ref(''); 

      onMounted(() => {
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage) {
          locale.value = storedLanguage;
        }
      });

      const submitForm = async () => {
          try {
              const user = { email: email.value, password: password.value };
              await store.dispatch('login', user);
              router.push({ name: 'Insights' });
          } catch (error) {             
              errorMessage.value = error.message;
          }
      };

      return {
          email,
          password,
          submitForm,
          errorMessage 
      };
  }
};
</script>
