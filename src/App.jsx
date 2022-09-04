import {Route, Routes} from "react-router-dom"
import NavigationList from './components/navigation/NavigationList';
import Content from './routes/Content';
import About from './routes/About';
import {Container} from '@mui/material';


function App() {

  return (
    <Container sx={{margin: "0px auto", height: "100%", width: "100%"}}>
    <header>
        <nav>
          <h1 style={{textAlign: "center", fontSize: "50px"}} >NEW TO-DO APP</h1>
          <NavigationList/>
        </nav>
     </header>
      <main>
        <Routes> 
          <Route path="content" element={<Content></Content>} ></Route>
          <Route path="about" element={<About></About>} ></Route>
        </Routes>
      </main>
    </Container>
  );
}

export default App;
