import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./favoriteSlice.js";
import searchReducer from "./searchSlice.js";

export default configureStore({
  reducer: {
    favorite: favoriteReducer,
    search: searchReducer,
  },
});
