import {Route, Routes} from "react-router-dom"
import NavigationList from './components/navigation/NavigationList';
import TodosApp from './routes/TodosApp';
import {Box, Container} from '@mui/material';
import About from "./routes/About";
import React from "react";


function App() {

  return (
    <Container sx={{backgroundColor: "WhiteSmoke", height: "fit-content", }}>
        <Box>
          <NavigationList/>
        </Box>
        <Box >
        <Routes>
          <Route path="todo1" element={<TodosApp></TodosApp>} ></Route>
          <Route path="about" element={<About></About>} ></Route>
        </Routes>
        </Box>
       
    </Container>
  );
}

export default App;
