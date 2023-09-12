<template>
    <div>
      <h2>Login</h2>
      <LoginForm />
    </div>
  </template>
  
  <script>
  import LoginForm from '../../components/LoginForm.vue';
  
  export default {
    name: 'Login',
    components: {
      LoginForm,
    },
  };
</script>
  