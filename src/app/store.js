import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import tasksReducer from "../features/tasks/TaskSlice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
