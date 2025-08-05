import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/ToDoSlice";
import doneReducer from "./slices/DoneSlice";
import pointsReducer from "./slices/PointsSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    done: doneReducer,
    points: pointsReducer,
  },
});

export default store;
