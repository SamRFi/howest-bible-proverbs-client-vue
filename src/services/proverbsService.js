import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_API_URL;

class ProverbsService {
  async getChapter(chapterNumber, language = 'en') {
    const response = await axios.get(`${API_URL}/proverbs/${chapterNumber}?language=${language}`);
    return response.data;
  }
}

export default new ProverbsService();
