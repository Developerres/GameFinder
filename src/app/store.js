import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./favoriteSlice.js";
import testReducer from "./testSlice.js";

export default configureStore({
  reducer: {
    favorite: favoriteReducer,
    test: testReducer,
  },
});
