import Card from './Card'
import { useSelector } from "react-redux";
import {getTodosByStatusFilter} from "../../redux/selector"
import { Box, Typography } from '@mui/material';


const Cards = () => {

  const {todos, statusFilter} = useSelector(state => state);
  const filteredTodos = getTodosByStatusFilter(todos, statusFilter);


  return (
    <Box>
        {filteredTodos.length ? filteredTodos.map(todo => (
        <Card key={todo.id} todo={todo} />
      )) : <Box textAlign="center" sx={{marginTop: "50px"}} >
            <Typography variant="h2" >Žiadne úlohy na dnes...</Typography></Box>}
    </Box>
  )
}

export default Cards