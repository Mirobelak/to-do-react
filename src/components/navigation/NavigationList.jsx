import React from "react"
import { Box, Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import AirplayIcon from '@mui/icons-material/Airplay';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

const NavigationList = () => {
  return (
    <Box sx={{textAlign: "center", display: "flex", flexDirection: "row", justifyContent: "space-between",padding: "5px"}}>
        <NavLink style={{textDecoration: "none" ,cursor: "pointer"}} to="/todo1">
        <Button variant="contained" startIcon={<AirplayIcon />}>
        To-Do App
        </Button>
      
        </NavLink>
        <NavLink style={{textDecoration: "none", cursor: "pointer"}} to="/about" >
             <Button variant="contained" startIcon={<ManageSearchIcon />}>
             About page
            </Button>       
        </NavLink>
    </Box>
  )
}

export default NavigationList