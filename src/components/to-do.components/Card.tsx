import {useState, useEffect, FC} from 'react';
import {Container, Card, CardContent, Typography, Checkbox } from '@mui/material';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo} from '../../redux/actions';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import React from 'react';


interface Props {
  todo: any
}

  const ToDoCard: FC<Props> = ({todo}) => {
  
  const dispatch = useDispatch()

  const [checked,setChecked] = useState(false)


  useEffect(() => {
    setChecked(todo.completed);
  }, [todo]);

  
  const handleCheked = () => dispatch(toggleTodo(todo.id));

  const deleteTodo = () => dispatch(removeTodo(todo.id));

  const removeItemHandler = () => {
    deleteTodo()
  }

  return (
    <Container  sx={{margin: "20px auto", width: "100%"}} >
    <Card variant="outlined" sx={{visibility: "0.5", width: "100%", height: "fit-content", overflowWrap: "anywhere", borderRadius: "10px"}} >
    <CardContent>
    <Checkbox
            sx={{float: "right"}}
            size="medium" 
            color='error'
            onClick={removeItemHandler}
            icon={<CancelOutlinedIcon sx={{ color:"red" }} />}
            />
      <Typography variant="h6">Úloha na dnes: {todo.title}
      {checked && <Typography>HOTOVO !</Typography>}</Typography>
      <hr/>
      <Typography variant='subtitle1'> Popis úlohy: {todo.text}</Typography>
          <Checkbox
            icon={<TaskAltIcon sx={{color: "green"}} />}
            checkedIcon={<CheckCircleIcon  sx={{ color:"green" }} />}
            size="medium" 
            checked={checked}
            onChange={handleCheked}
            inputProps={{ 'aria-label': 'controlled' }}
            sx={{float: "right"}}
              />
          <Typography variant='h6'>Deadline: {todo.date}</Typography>
    </CardContent>
    </Card>
</Container>
  )
}

export default ToDoCard

