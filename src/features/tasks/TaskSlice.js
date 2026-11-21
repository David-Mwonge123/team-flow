import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const taskSlice = createSlice({
  name: "tasks",
  initialState,

  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },

    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },

    updateTask: (state, action) => {
      const index = state.findIndex(
        task => task.id === action.payload.id
      );

      if (index !== -1) {
        state[index] = action.payload;
      }
    },

    updateStatus: (state, action) => {
      const task = state.find(
        task => task.id === action.payload.id
      );

      if (task) {
        task.status = action.payload.status;
      }
    }
  }
});

export const { addTask, deleteTask, updateTask, updateStatus } = taskSlice.actions;

export default taskSlice.reducer;