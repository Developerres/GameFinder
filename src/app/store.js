import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./favoriteSlice.js";

export default configureStore({
  reducer: {
    favorite: favoriteReducer,
  },
});
