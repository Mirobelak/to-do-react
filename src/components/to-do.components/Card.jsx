import React from 'react';
import {Container, Card, CardContent, Typography, IconButton } from '@mui/material';
import {Check, Delete} from "@mui/icons-material"


const ToDoCard = ({checkToDo, title, text, id, isCompleted,deleteTodo,date}) => {
  
  const markComplete = () => {
    checkToDo(id);
   
  }

  const removeTodo = () => {
    deleteTodo(id)
  }
  
  const todoStyle = isCompleted ? {textDecoration: "line-through"} : {textDecoration: "none"};
  
  return (
    <Container  sx={{margin: "20px auto", width: "100%"}} >
    <Card variant="outlined" sx={{visibility: "0.5", width: "100%", height: "fit-content", overflowWrap: "anywhere", borderRadius: "10px"}} >
    <CardContent>
      <Typography style={todoStyle} >
          <h1>{title}</h1>
          <p style={{textAlign: "center"}}>{text} </p>
          
          <IconButton onClick={markComplete} >
            <Check style={{color: "green"}} ></Check>
          </IconButton>
          <IconButton onClick={removeTodo}  style={{float: "right"}} >
            <Delete style={{color: "red"}} ></Delete>
          </IconButton>
          <h3>{date}</h3>
        </Typography>
        
    </CardContent>
    </Card>
</Container>
  )
}

export default ToDoCard