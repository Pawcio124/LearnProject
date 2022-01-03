import { Box, Button, TextField } from "@material-ui/core";
import React from "react";

interface NewToDoProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setList: React.Dispatch<React.SetStateAction<string[]>>;
}

const NewToDo = (props: NewToDoProps) => {
  const { setValue, setList, value } = props;

  return (
    <Box>
      <TextField
        onChange={(e) => setValue(e.target.value)}
        variant="outlined"
        value={value}
      />
      <Button
        onClick={() => {
          setList((prev) => [...prev, value]);
          setValue("");
        }}
      >
        Add
      </Button>
    </Box>
  );
};

export default NewToDo;
