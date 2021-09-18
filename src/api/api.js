import axios from "axios";

// const API_KEY = "e65eb582631741c0b3c6a3f319687804";
const API_KEY = "5e447d077ed04901928670529e053a6d";

const instance = axios.create({
  baseURL: `https://api.rawg.io/api/`,
});

export const rawgAPI = {
  async getGenresAPI() {
    try {
      const response = await instance.get(`genres?page_size=40&key=${API_KEY}`);
      return response;
    } catch (error) {
      console.error("ERROR catched", error);
    }
  },

  async getGameListAPI(genres, ordering, page = 1) {
    try {
      const genresSort = genres ? `&genres=${genres}` : "";
      const orderingSort = ordering ? `&ordering=${ordering}` : "";

      const response = await instance.get(
        `games?key=${API_KEY}&page_size=40${orderingSort}${genresSort}&dates=2020-12-01,2021-12-31&page=${page}`
      );

      return response;
    } catch (error) {
      console.error("ERROR catched", error);
    }
  },

  async getGameInfoAPI(gameId) {
    try {
      const response = await instance.get(`games/${gameId}?key=${API_KEY}`);

      return response;
    } catch (error) {
      console.error("ERROR catched", error);
    }
  },

  async getGameScreenshotsAPI(gameId) {
    try {
      const response = await instance.get(
        `games/${gameId}/screenshots?key=${API_KEY}`
      );

      return response;
    } catch (error) {
      console.error("ERROR catched", error);
    }
  },

  async getSearch(term) {
    try {
      const response = await instance.get(
        `games?key=${API_KEY}&page_size=40&search=${term}&search_precise=false`
      );

      return response;
    } catch (error) {
      console.error("ERROR catched", error);
    }
  },
};
