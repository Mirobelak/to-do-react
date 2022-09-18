import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { STATUS_FILTER } from '../../utils/STATUS_FILTER';
import { setFilter } from "../../redux/actions"
import { Container } from '@mui/material';

const StatusFilter = () => {

  const dispatch = useDispatch();

  return (
    <Container>
    <Box sx={{ width: '100%', display: "flex", flexDirection: "row",  justifyContent: "space-evenly"}}>
      <Tabs
        
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        sx={{display: "flex", flexDirection: "row"}}
        
      >
         {Object.keys(STATUS_FILTER).map(filterkey => {
            const currentFilter = STATUS_FILTER[filterkey];
            return (
              <Tab
                key={`status-filter-${currentFilter}`}
                onClick={() => dispatch(setFilter(currentFilter))}
                value={currentFilter} label={currentFilter}
                
              >
              </Tab>
            )
          })}
                </Tabs>
    </Box>
    </Container>
  )
}

export default StatusFilter