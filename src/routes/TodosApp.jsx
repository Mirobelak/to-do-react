import React from 'react'
import Form from '../components/to-do.components/Form';
import Cards from "../components/to-do.components/Cards"
import StatusFilter from "../components/to-do.components/StatusFilter"
import {Container} from '@mui/material';


  
const Content = () => {

  return (
<Container maxWidth="sm" >
<Form/>
<StatusFilter/>
<Cards/>
</Container>
  )
}

export default Content