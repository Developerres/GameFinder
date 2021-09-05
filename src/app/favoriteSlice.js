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
      // state = action.payload;
      const isFavorite = state.games.find(
        (el) => el.gameId === action.payload.gameId
      );
      if (isFavorite) return;
      state.games = [...state.games, action.payload];
      console.log("action.payload >>>", action.payload);
      console.log("state.games >>>", state.games);
    },
    deleteFromFavorite: (state, action) => {
      console.log("state.games >>>", state.games);
      const deleted = state.games.filter(
        (el) => el.gameId !== action.payload.gameId
      );
      console.log("Deleted array>> ", deleted);
      state.games = deleted;
    },
  },
});

export const { incrementByAmount, deleteFromFavorite } = slice.actions;

export default slice.reducer;
