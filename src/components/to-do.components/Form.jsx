import { FormControl, Container, TextField, Button} from '@mui/material';
import React, {useState} from "react";
import { useDispatch } from "react-redux";
import {addTodo} from "../../redux/actions"



const Form = () => {

  const dispatch = useDispatch();

  const [title,setTitle] = useState("")
  const [text,setText] = useState("")
  const [date, setDate] = useState("")
  
  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(addTodo(title, text, date))
      setText("")
      setTitle("")
  }

  return (
    <Container sx={{
      display: "flex", flexDirection: "column"}} >
      <h1 style={{textAlign: "center"}}>To-Do App</h1>
      <form onSubmit={handleSubmit} >
      <FormControl fullWidth={true} >
      <TextField value={title} onChange={(e)=> {setTitle(e.target.value)}} label="Úoha na dnes..."  required={true}>
    </TextField>
    <TextField value={text} onChange={(e)=> {setText(e.target.value)}} label="Popis úlohy..." >
    </TextField>
    <TextField value={date} type="date" onChange={(e)=> {setDate(e.target.value)}}>
    </TextField>
    <Button variant="contained" color="success" style={{marginTop: "5px"}} type="submit" >
        Pridaj
    </Button>
  </FormControl>
      </form>
      </Container>

      
  )
}

export default Form