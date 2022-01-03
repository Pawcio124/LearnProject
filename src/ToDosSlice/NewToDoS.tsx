import { Box, Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewToDo } from "../app/store/toDoSlice";

const NewToDoS = () => {
  const [value, setValue] = useState<string>("");
  const dispatch = useDispatch();

  return (
    <Box>
      <TextField
        onChange={(e) => {
          setValue(e.target.value);
        }}
        variant="outlined"
        value={value}
      />
      <Button
        onClick={() => {
          dispatch(addNewToDo(value));
          setValue("");
        }}
      >
        Add
      </Button>
    </Box>
  );
};

export default NewToDoS;
