import { FormControl, Container, TextField, Button} from '@mui/material';
import React, {useState} from "react";

const Form = ({onSubmitButton,setStatus}) => {
  
  const [title,setTitle] = useState("")
  const [text,setText] = useState("")
  const [date, setDate] = useState(null)
  
  const handleChange = (e) => {
      e.preventDefault();
      onSubmitButton(text, title, date) 
      setText("")
      setTitle("")
  }

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

    
  return (
    <Container sx={{
      display: "flex", flexDirection: "column"}} >
      <h1 style={{textAlign: "center"}}>Content</h1>
      <form onSubmit={handleChange} >
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
      <select onChange={statusHandler} style={{margin: "30px auto", padding: "12px"}}  name="" id=""
              >  
          <option>All</option>
          <option>Active</option>
          <option>Done</option>
        </select>
      </Container>

      
  )
}

export default Form