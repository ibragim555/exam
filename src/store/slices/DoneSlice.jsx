import { createSlice } from "@reduxjs/toolkit";

const saved = JSON.parse(localStorage.getItem("done")) || [];

const doneSlice = createSlice({
  name: "done",
  initialState: saved,
  reducers: {
    addDone: (state, action) => {
      state.push(action.payload);
    },
    removeDone: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addDone, removeDone } = doneSlice.actions;
export default doneSlice.reducer;
