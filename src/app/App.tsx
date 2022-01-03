import { Routes, Route, Navigate, Link } from "react-router-dom";
import { AppBar, Box, Button, Toolbar } from "@material-ui/core";
import HomePage from "../HomePage/HomePage";
import ToDos from "../ToDos/ToDos";

function App() {
  return (
    <Box height={"100%"} display={"flex"} flexDirection={"column"}>
      <AppBar position="static">
        <Toolbar>
          <Button>
            <Link to={"/"}>Home</Link>
          </Button>
          <Button>
            <Link to={"/toDos"}>To Dos</Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Box padding={2} flex={1} overflow={"auto"}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/toDos" element={<ToDos />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        bgcolor={"gray"}
        height={"50px"}
        alignItems={"center"}
      >
        Footer
      </Box>
    </Box>
  );
}

export default App;
