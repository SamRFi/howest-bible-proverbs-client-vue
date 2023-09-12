import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_API_URL;

class AuthService {
  async login(user) {
    try {
      const response = await axios.post(`${API_URL}/login`, user, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
  
      if (response && response.status === 401) {
        throw new Error('Wrong credentials.');
      }
  
      return response.data;
  
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Wrong credentials.');
      }
  
      console.error("An error occurred during login:", error);
      throw new Error('Login failed. Please try again later.');
    }
  }
  

  async logout() {
    try {
      const response = await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
      if (response.status === 200) {
        localStorage.removeItem('isLoggedIn');
        return response.data;
      }
    } catch (error) {
      console.error("An error occurred while logging out:", error);
      throw error;
    }
  }

  async register(user) {
    return axios.post(`${API_URL}/register`, user);
  }

  async checkAuth() {
    try {
      const response = await axios.get(`${API_URL}/insights`, { withCredentials: true });
      return response.status === 200;
    } catch (error) {
      return false;
    }
  }

}

export default new AuthService();
