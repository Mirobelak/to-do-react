import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { STATUS_FILTER } from '../../utils/STATUS_FILTER';
import { setFilter } from "../../redux/actions"
import { Button, Container, } from '@mui/material';
import React from 'react';

const StatusFilter = () => {

  const dispatch = useDispatch();

  return (
    <Container>
    <Box sx={{ width: '100%', display: "flex", flexDirection: "row",  justifyContent: "space-evenly"}}>
      <Box sx={{ width: '100%', display: "flex", flexDirection: "row",  justifyContent: "space-evenly", cursor: "pointer"}}>
         {(Object.keys(STATUS_FILTER) as (keyof typeof STATUS_FILTER)[]).map((filterkey) => {
            const currentFilter = STATUS_FILTER[filterkey]
            return (
              <Button 
              variant="contained" 
              size="large" 
              key={currentFilter} 
              sx={{width: "100%", height: "fit-content", borderRadius: "10px", margin: "10px", padding: "10px", textAlign: "center", cursor: "pointer"}} 
              onClick={() => dispatch(setFilter(currentFilter))}>
                {currentFilter}
              </Button>
            )
          })}
        </Box>
    </Box>
    </Container>
  )
}

export default StatusFilter