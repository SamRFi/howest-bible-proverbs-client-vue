import InsightService from '../services/insightService.js';

const state = {
  insights: [],
};

const mutations = {
  setInsights(state, insights) {
    state.insights = insights;
  },
  UPDATE_INSIGHT(state, updatedInsight) {
    const index = state.insights.findIndex(insight => insight.id === updatedInsight.id);
    if (index !== -1) {
      state.insights[index] = updatedInsight;
    }
  },
  DELETE_INSIGHT(state, id) {
    state.insights = state.insights.filter(insight => insight.id !== id);
  }
};

const actions = {
  async fetchInsights({ commit }) {
    try {
      const insights = await InsightService.getInsights();
      commit('setInsights', insights);
    } catch (error) {
      console.error("An error occurred while fetching insights:", error);
    }
  },
  async postInsight({ dispatch }, insight) {
    try {
      await InsightService.postInsight(insight);
      dispatch('fetchInsights');
    } catch (error) {
      console.error("An error occurred while posting an insight:", error);
    }
  },
  async updateInsight({ commit }, insight) {
    try {
      const response = await InsightService.updateInsight(insight.id, insight);
      commit('UPDATE_INSIGHT', response.data);
    } catch (error) {
      console.error(error);
    }
  },
  async deleteInsight({ commit }, id) {
    await InsightService.deleteInsight(id);
    commit('DELETE_INSIGHT', id);
  }
};

const getters = {
  insights: (state) => state.insights,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
