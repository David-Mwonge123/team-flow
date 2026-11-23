import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const API_URL = "https://YOUR-URL-HERE.mockapi.io/tasks";

// 1. Get all tasks
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const res = await fetch(API_URL);
  return await res.json();
});

// 2. Add tasks to API
export const addTaskToApi = createAsyncThunk("tasks/addTaskToApi", async (newTask) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTask),
  });
  return await res.json();
});

// 3. Delete tasks
export const deleteTaskFromApi = createAsyncThunk("tasks/deleteTaskFromApi", async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  return id;
});

// 4. Update tasks
export const updateTaskInApi = createAsyncThunk("tasks/updateTaskInApi", async (task) => {
  const res = await fetch(`${API_URL}/${task.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return await res.json();
});

const initialState = [];

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    updateStatus: (state, action) => {
      const task = state.find((task) => task.id === action.payload.id);
      if (task) {
        task.status = action.payload.status;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addTaskToApi.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteTaskFromApi.fulfilled, (state, action) => {
        return state.filter((task) => task.id !== action.payload);
      })
      .addCase(updateTaskInApi.fulfilled, (state, action) => {
        const index = state.findIndex((task) => task.id === action.payload.id);
        if (index !== -1) state[index] = action.payload;
      });
  },
});

export const { addTask, deleteTask, updateTask, updateStatus } = taskSlice.actions;
export default taskSlice.reducer;