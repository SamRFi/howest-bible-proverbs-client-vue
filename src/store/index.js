import { createStore } from 'vuex';
import authModule from './authModule';
import insightsModule from './insightsModule';

export default createStore({
  modules: {
    auth: authModule,
    insights: insightsModule,
  },
});
