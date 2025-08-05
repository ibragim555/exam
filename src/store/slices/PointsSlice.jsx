import { createSlice } from "@reduxjs/toolkit";

const saved = JSON.parse(localStorage.getItem("points")) || 0;

const pointsSlice = createSlice({
  name: "points",
  initialState: saved,
  reducers: {
    addPoint: (state) => state + 1,
  },
});

export const { addPoint } = pointsSlice.actions;
export default pointsSlice.reducer;
