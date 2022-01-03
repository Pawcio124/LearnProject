import { Box, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store/store";
import { removeToDo } from "../app/store/toDoSlice";

const ToDoListS = () => {
  const toDoList = useSelector((state: RootState) => state.toDos.toDos);
  const dispatch = useDispatch();

  return (
    <Box>
      {toDoList?.map((item, id) => (
        <div key={`item-${id}`}>
          {item}
          <Button
            onClick={() => {
              dispatch(removeToDo(id));
            }}
          >
            Delete
          </Button>
        </div>
      ))}
    </Box>
  );
};

export default ToDoListS;
