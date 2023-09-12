<template>
    <div>
      <h2>{{ $t('register') }}</h2>
      <RegistrationForm />
    </div>
  </template>
  
<script>
  import RegistrationForm from '../../components/RegistrationForm.vue';
  
  export default {
    name: 'Register',
    components: {
      RegistrationForm,
    },
  };
  </script>
  