import { Box, Button, TextField } from "@material-ui/core";
import { useState } from "react";

const ToDos = () => {
  const [value, setValue] = useState<string>("");
  const [list, setList] = useState<string[]>([]);

  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Box>
        <TextField
          onChange={(e) => setValue(e.target.value)}
          variant="outlined"
        />
        <Button
          onClick={() => {
            setList((prev) => [...prev, value]);
          }}
        >
          {" "}
          Add
        </Button>
      </Box>
      <Box>
        {list?.map((item, id) => (
          <div key={`item-${id}`}>
            {item}
            <Button
              onClick={() => {
                const newValue = [...list];
                newValue.splice(id, 1);
                setList(newValue);
              }}
            >
              Delete
            </Button>
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default ToDos;
