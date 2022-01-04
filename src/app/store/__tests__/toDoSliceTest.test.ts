import { store } from "../store";
import { addNewToDo, removeToDo } from "../toDoSlice";

describe("toDoSliceTest", () => {
  it("Should have initial state without todos", () => {
    const initialState = store.getState().toDos.toDos;
    expect(initialState.length).toEqual(0);
  });
  it("Should add and remove items from store on dispatch actions", () => {
    expect(store.getState().toDos.toDos.length).toEqual(0);
    store.dispatch(addNewToDo("ToDo1"));
    expect(store.getState().toDos.toDos.length).toEqual(1);
    store.dispatch(removeToDo(0));
    expect(store.getState().toDos.toDos.length).toEqual(0);
  });
});
