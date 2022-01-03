import { Box } from "@material-ui/core";
import NewToDoS from "./NewToDoS";
import ToDoListS from "./ToDoListS";

const ToDosS = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <NewToDoS />
      <ToDoListS />
    </Box>
  );
};

export default ToDosS;
