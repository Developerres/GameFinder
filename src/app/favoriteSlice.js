import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "favorite",
  initialState: {
    gameName: "",
    metacritic: 0,
    released: "",
    background_image: "",
    parent_platforms: [],
    genres: [],
    tags: [],
    description_raw: "",
    games: [],
  },
  reducers: {
    addToFavorite: (state, action) => {
      const isFavorite = state.games.find(
        (el) => el.gameId === action.payload.gameId
      );
      if (isFavorite) return;
      state.games = [...state.games, action.payload];
      // Add to LocalStorage
      const favArray = JSON.parse(localStorage.getItem("favorite"));
      const newFavArray = !favArray
        ? [action.payload]
        : [...favArray, action.payload];
      localStorage.setItem("favorite", JSON.stringify(newFavArray));
    },
    deleteFromFavorite: (state, action) => {
      const deleted = state.games.filter(
        (el) => el.gameId !== action.payload.gameId
      );
      state.games = deleted;
      localStorage.removeItem("favorite");
      localStorage.setItem("favorite", JSON.stringify(deleted));
    },
  },
});

export const { addToFavorite, deleteFromFavorite } = slice.actions;

export default slice.reducer;
