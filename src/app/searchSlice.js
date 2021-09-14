import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "search",
  initialState: {
    term: "",
  },
  reducers: {
    searchGame: (state, action) => {
      state.term = action.payload;
    },
  },
});

export const { searchGame } = slice.actions;

export default slice.reducer;
