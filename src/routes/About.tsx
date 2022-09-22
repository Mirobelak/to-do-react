import {useState, useEffect} from 'react';
import {Typography, Box } from '@mui/material';
import Card from "../components/to-do.components/Card";
import React from 'react';

interface Todo {
  id: string
  title: string
  text: string
  date: string
  completed: boolean
}
  
const About = () => {

const [todos, setTodos] = useState<Todo[]>([])

    useEffect(()=>{
     fetch('https://630a45a33249910032838444.mockapi.io/api/todo/todo').then(res=>res.json()).then(data=>setTodos(data))
   }, [])

  return (
    <Box>
      <Typography textAlign="center">This is about section - example of ReactRouter and Api call, no functionality with Cards</Typography>
      <Box>
        {todos.length ? todos.map((t:any) => (
        <Card key={t.id} todo={t} />
      )) : <Box textAlign="center" sx={{marginTop: "50px"}} >
            <Typography variant="h2" >Žiadne úlohy na dnes...</Typography>
            </Box>}
    </Box>
    
    </Box>
  )
}

export default About