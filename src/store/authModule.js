import AuthService from '../services/authService.js';

const state = {
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
    errorMessage: '',
};

const mutations = {
  setLoggedIn(state, status) {
    state.isLoggedIn = status;
    localStorage.setItem('isLoggedIn', status);
  },
  setErrorMessage(state, message) {
    state.errorMessage = message;
  },
};

const actions = {
  async checkAuth({ commit }) {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    commit('setLoggedIn', isLoggedIn);
  },
  async login({ commit }, user) {
    try {
      const response = await AuthService.login(user);
      commit('setLoggedIn', true);
      commit('setErrorMessage', '');
    } catch (error) {
      commit('setErrorMessage', error.message);
      throw error;
    }
  },
  async register({ commit }, user) {
    try {
      const response = await AuthService.register(user);
      commit('setLoggedIn', false);
    } catch (error) {
      throw error;
    }
  },
  async logout({ commit }) {
    try {
      const response = await AuthService.logout();
      if (response) {
        commit('setLoggedIn', false);
      }
    } catch (error) {
      commit('setLoggedIn', false);
      throw error;
    }
  }
};


const getters = {
  isLoggedIn: (state) => state.isLoggedIn,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
