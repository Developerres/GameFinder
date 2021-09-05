import axios from "axios";

// const API_KEY = "e65eb582631741c0b3c6a3f319687804";
const API_KEY = "5e447d077ed04901928670529e053a6d";

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://api.rawg.io/api/`,
});

export const rawgAPI = {
  async getGenresAPI() {
    try {
      const response = await axios.get(
        `https://api.rawg.io/api/genres?key=${API_KEY}`
      );
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  },

  async getGameListAPI(genres, ordering) {
    try {
      const genresSort = genres ? `&genres=${genres}` : "";
      const orderingSort = ordering ? `&ordering=${ordering}` : "";

      const response = await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}&page_size=40${orderingSort}${genresSort}&dates=2020-12-01,2021-12-31`
      );
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  },

  async getGameInfoAPI(gameId) {
    try {
      const response = await axios.get(
        `https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`
      );
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  },

  async getGameScreenshotsAPI(gameId) {
    try {
      const response = await axios.get(
        `https://api.rawg.io/api/games/${gameId}/screenshots?key=${API_KEY}`
      );
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  },
};
