import Card from './Card'
import { useSelector } from "react-redux";
import {getTodosByStatusFilter} from "../../redux/selector"
import { Box, Typography } from '@mui/material';
import { Todo } from '../../dataStructure';
import React from 'react';
import { RootState } from '../../redux/store';


const Cards = () => {

  const {todosReducer, statusFilterReducer}: {todosReducer:Todo; statusFilterReducer:any} = useSelector((state:RootState) => state);

  const filteredTodos = getTodosByStatusFilter(todosReducer, statusFilterReducer);

  return (
    <Box>
        {filteredTodos.length ? filteredTodos.map((t:any) => (
        <Card key={t.id} todo={t} />
      )) : <Box textAlign="center" sx={{marginTop: "50px"}} >
            <Typography variant="h2" >Žiadne úlohy na dnes...</Typography></Box>}
    </Box>
  )
}

export default Cards