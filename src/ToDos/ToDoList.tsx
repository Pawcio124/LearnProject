import { Box, Button } from "@material-ui/core";
import React, { memo } from "react";
import * as _ from "lodash";

interface ToDoListProps {
  list: string[];
  setList: React.Dispatch<React.SetStateAction<string[]>>;
}

const ToDoList = (props: ToDoListProps) => {
  const { list, setList } = props;

  return (
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
  );
};

export default memo(
  ToDoList,
  (prevProp: ToDoListProps, nextProp: ToDoListProps) =>
    _.isEqual(prevProp.list, nextProp.list)
);
