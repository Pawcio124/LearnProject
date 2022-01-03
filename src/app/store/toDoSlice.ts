import { createSlice } from "@reduxjs/toolkit";

interface ToDoState {
  toDos: string[];
}

const initialState: ToDoState = {
  toDos: [],
};

export const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    addNewToDo: (state, action) => {
      state.toDos.push(action.payload);
    },
    removeToDo: (state, action) => {
      state.toDos.splice(action.payload, 1);
    },
  },
});

export const { addNewToDo, removeToDo } = toDoSlice.actions;

export default toDoSlice.reducer;
