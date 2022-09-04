import React, {useState, useEffect} from 'react'
import Form from '../components/to-do.components/Form';
import Cards from "../components/to-do.components/Cards"
import {v4 as uuid} from "uuid"
import {Container} from '@mui/material';


  
const Content = () => {

  // STATES
  const [todos, setTodos] = useState([
    {
    id: 1,
    title: "Test", 
    text: "text",
    date: null,
    isCompleted: false}

  ])
  const [status, setStatus] = useState("All")
  const [filteredTodos, setFilteredTodos] = useState([])

  //useEffect

  useEffect(()=> {filterChange()}, [todos, status])

  //FUNCTIONS 

  const checkToDo = (id) => {
    setTodos(todos.map((todo)=> { if (todo.id === id ) {
        todo.isCompleted = !todo.isCompleted
        
      }
      return todo;
     
    }))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo)=> todo.id  !== id 
    ))
  }

  const filterChange = () => {
    switch(status) {
      case "Done" : setFilteredTodos(todos.filter((todo) => 
        todo.isCompleted === true))
      break;
      case "Active" : setFilteredTodos(todos.filter((todo) => 
        todo.isCompleted === false))
        break;
      default: setFilteredTodos(todos)
    }
  }

  const onSubmitButton = (text, title, date) => {
    const newTodo = {
      id: uuid(),
      text: text,
      title: title,
      date: date,
      isCompleted: false
    }
    setTodos([...todos, newTodo])

  }

  
  return (
<Container maxWidth="sm" >
<Form onSubmitButton={onSubmitButton} setStatus={setStatus}  />
<Cards filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} checkToDo={checkToDo} deleteTodo={deleteTodo} />
</Container>
  )
}

export default Content