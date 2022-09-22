import { FormControl, Container, TextField, Button, Box, Alert} from '@mui/material';
import React, {FormEvent, useState} from "react";
import { useDispatch } from "react-redux";
import {addTodo} from "../../redux/actions"

const Form = () => {

  const dispatch = useDispatch();

  const [title,setTitle] = useState("")
  const [text,setText] = useState("")
  const [date, setDate] = useState("")
  const [error1, setError1] = useState(false)
  const [error2, setError2] = useState(false)
  
  const handleSubmit = (event: FormEvent) => {
      event.preventDefault();
      // validations
      if(title === "" || text === "" || date === "")
      {
        setError1(true)
      } 
      else if( title.length > 20 || text.length > 100) 
      {
        setError2(true)
      }
      else {
      dispatch(addTodo(title, text, date))
      setText("")
      setTitle("")
      setError1(false)
      setError2(false)
     
      }
  }

  return (
    <Container sx={{
      display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "400px"  }} 
      >
        { error1 && <Alert severity="error">Vyplň všetky polia !</Alert>}
        { error2 && <Alert severity="warning">Nevymyšlaj si, taká dlhá úloha nie je !</Alert>}
      <Box sx={{ width: 'fit-content', height: "fit-content"}}>
      <h1 style={{textAlign: "center"}}>To-Do App</h1>
      <form onSubmit={handleSubmit} >
      <FormControl>
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
      </Box>
      </Container>

      
  )
}

export default Form