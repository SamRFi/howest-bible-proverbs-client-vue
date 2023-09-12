<template>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">{{ $t('name') }}: </label>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div>
        <label for="email">Email: </label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div>
        <label for="password">{{ $t('password') }}: </label>
        <input type="password" id="password" v-model="password" required>
        <div v-if="password.length < 6 && password.length > 0" class="error-message">
          {{ $t('passwordLength') }}
        </div>
      </div>
      <div>
        <label for="confirmPassword">{{ $t('passwordConfirm') }}: </label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" required>
        <div v-if="password !== confirmPassword && confirmPassword.length > 0" class="error-message">
          {{ $t('passwordMatch') }}
        </div>
      </div>
      <button type="submit" :disabled="!isValid">{{ $t('register') }}</button>
    </form>
  </template>
  
  <script>
  import { ref, onMounted, computed } from 'vue';
  import { useRouter } from 'vue-router';
  import { useStore } from 'vuex';
  import { useI18n } from 'vue-i18n';
  
  export default {
    name: 'RegistrationForm',
    setup() {
      const { locale } = useI18n();
      const name = ref('');
      const email = ref('');
      const password = ref('');
      const confirmPassword = ref('');
      const router = useRouter();
      const store = useStore();

      onMounted(() => {
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage) {
          locale.value = storedLanguage;
        }
      });

      const isValid = computed(() => {
        return password.value.length >= 6 && password.value === confirmPassword.value;
      });

  
      const submitForm = async () => {
        try {
          if (password.value !== confirmPassword.value) {
            
            return;
          }
  
          const user = { name: name.value, email: email.value, password: password.value };
          await store.dispatch('register', user);
          router.push({ name: 'Login' });
        } catch (error) {
          
        }
      };
  
      return {
        name,
        email,
        password,
        confirmPassword,
        submitForm,
        isValid
      };
    }
  };
  </script>
  <style>
    .error-message {
      color: red;
    }
  </style>
  