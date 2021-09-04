import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "favorite",
  initialState: {
    value: 0,
    gameName: "",
    metacritic: 0,
    released: "",
    background_image: "",
    parent_platforms: [],
    genres: [],
    tags: [],
    description_raw: "",
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state = action.payload;
      console.log("action.payload >>>", action.payload);
      console.log("state >>>", state);
    },
  },
});

export const { incrementByAmount } = slice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const gameName = (state) => state.favorite.gameName;

export default slice.reducer;
