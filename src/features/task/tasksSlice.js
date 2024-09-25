import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTasks: [],
  filterTasks: [],
  activePriority: "all",
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setAllTasks: (state, action) => {
      state.allTasks = action.payload;
      state.filterTasks = action.payload;
    },
    handleSetPriority: (state, action) => {
      state.activePriority = action.payload;
    },

    handleSetStatus: (state, action) => {
      state.activeStatus = action.payload;
    },

    handleFilterTasks: (state) => {
      if (state.activePriority === "all") {
        state.filterTasks = state.allTasks;
      } else {
        state.filterTasks = state.allTasks.filter(
          (task) => task.priority.toLowerCase() === state.activePriority
        );
      }
    },
  },
});

export const {
  setAllTasks,
  handleSetPriority,
  handleFilterTasks,
  handleSetStatus,
} = taskSlice.actions;

export default taskSlice.reducer;
