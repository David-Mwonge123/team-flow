import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// MockAPI
const API_URL = "https://6b03be229e7cafb37dbf7d11.mockapi.io/Tasks";

// Get tasks
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const res = await axios.get(API_URL);
  return res.data;
});

// Add tasks
export const addTask = createAsyncThunk("tasks/addTask", async (task) => {
  const res = await axios.post(API_URL, task);
  return res.data;
});

// Delete tasks
export const deleteTask = createAsyncThunk("tasks/deleteTask", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

// Update tasks
export const updateTask = createAsyncThunk("tasks/updateTask", async (task) => {
  const res = await axios.put(`${API_URL}/${task.id}`, task);
  return res.data;
});

// Update Status
export const updateStatus = createAsyncThunk(
  "tasks/updateStatus",
  async ({ id, status }) => {
    const res = await axios.put(`${API_URL}/${id}`, { status });
    return res.data;
  },
);

const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        return state.filter((t) => t.id !== action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.findIndex((t) => t.id === action.payload.id);
        if (index !== -1) state[index] = action.payload;
      })
      .addCase(updateStatus.fulfilled, (state, action) => {
        const index = state.findIndex((t) => t.id === action.payload.id);
        if (index !== -1) state[index] = action.payload;
      });
  },
});

export default taskSlice.reducer;
