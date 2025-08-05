import { createSlice } from "@reduxjs/toolkit";

const saved = JSON.parse(localStorage.getItem("todo")) || [];

const todoSlice = createSlice({
  name: "todo",
  initialState: saved,
  reducers: {
    setTodos: (state, action) => action.payload,
    deleteTodo: (state, action) =>
      state.filter((item) => item.id !== action.payload),
  },
});

export const { setTodos, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
