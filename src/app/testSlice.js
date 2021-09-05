import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "test",
  initialState: {
    value: 0,
    book: {
      id: "",
      zoom: false,
      boo: [],
    },
    zim: [],
  },
  reducers: {
    increment2: (state, action) => {
      state.book = action.payload;
      const p = action.payload.id;
      console.log("id>>", p);
      if (p <= 4) {
        state.zim = [...state.zim, action.payload];
      }
      state.value += 1;
      console.log("Boo", state.book);
      console.log("Zim", state.zim);
    },
  },
});

export const { increment2 } = slice.actions;

export default slice.reducer;
