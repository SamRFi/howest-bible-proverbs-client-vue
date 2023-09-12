import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_API_URL;

class InsightService {
  async getInsights() {
    const response = await axios.get(`${API_URL}/insights`, { withCredentials: true });
    return response.data;
  }

  async postInsight(insight) {
    try {
      const response = await axios.post(`${API_URL}/insights`, insight, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error("An error occurred while posting an insight:", error);
    }
  }

  async updateInsight(id, updatedInsight) {
    const response = await axios.put(`${API_URL}/insights/${id}`, updatedInsight, { withCredentials: true });
    return response.data;
  }

  async deleteInsight(id) {
    const response = await axios.delete(`${API_URL}/insights/${id}`, { withCredentials: true });
    return response.data;
  }
}

export default new InsightService();
