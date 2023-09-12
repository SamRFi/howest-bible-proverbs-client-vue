import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import store from './store'; 
import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import nl from './locales/nl.json';

  
const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    en,
    nl,
  },
});


const app = createApp(App);
app.use(router);
app.use(store);
app.use(i18n);
app.mount('#app');

