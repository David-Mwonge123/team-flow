import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/tasks/TaskSlice";
import authReducer from "../features/auth/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
  }
});

export default store;