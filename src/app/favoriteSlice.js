import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "favorite",
  initialState: {
    value: 12,
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
    incrementByAmount: (state, action) => {
      const isFavorite = state.games.find(
        (el) => el.gameId === action.payload.gameId
      );
      if (isFavorite) return;
      state.games = [...state.games, action.payload];
      // Add to LocalStorage
      const favArray = JSON.parse(localStorage.getItem("favorite"));
      console.log("FavARRAY", favArray);
      const newFavArray = !favArray
        ? [action.payload]
        : [...favArray, action.payload];
      console.log("NewFavARRAY", newFavArray);
      localStorage.setItem("favorite", JSON.stringify(newFavArray));
      console.log(
        "Some FAV from LocalStorage >>> ",
        JSON.parse(localStorage.getItem("favorite"))
      );
      // localStorage.clear();
    },
    deleteFromFavorite: (state, action) => {
      console.log("state.games >>>", state.games);
      const deleted = state.games.filter(
        (el) => el.gameId !== action.payload.gameId
      );
      console.log("Deleted array>> ", deleted);
      state.games = deleted;
      localStorage.removeItem("favorite");
      localStorage.setItem("favorite", JSON.stringify(deleted));
    },
  },
});

export const { incrementByAmount, deleteFromFavorite } = slice.actions;

export default slice.reducer;
