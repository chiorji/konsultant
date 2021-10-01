import React, { useState } from 'react';
import {connect} from 'react-redux';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';

import ContentWrapper from './ContentWrapper';
import * as action from '../store/client/actions'

const NewSchedule = ({schedule}) => {
  
  const [date, setDateValue] = useState(new Date());
  const [ details, setDetails ] = useState({
    title: 'Title',
    description: 'Some title description',
  })
  
  const handleSchedule = (e) => {
    e.preventDefault();
    (date && details.title && details.description) && schedule({
      date: date.toUTCString(),
      ...details
    })
  }
  
  return (
    <ContentWrapper>
      <Typography variant="h4" component="h2" sx={{fontWeight: 'medium'}}>
        Schedule new meeting
      </Typography>

      <form onSubmit={handleSchedule}>
        <Box sx={{display: 'flex', my: 5, flexDirection: {xs: 'column', md: 'row'}}}>
        <Box sx={{width: {xs: '100%', md: '600px'}}}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
              orientation="landscape"
              openTo="day"
              value={date}
              shouldDisableDate={isWeekend}
              onChange={(newValue) => {
                setDateValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
        <Box sx={{flexGrow: 1, p: 3}}>
          <TextField
            fullWidth
            placeholder="Meeting title"
            variant="outlined"
            type="text"
              value={details.title}
              onChange={(e)=> setDetails({...details, title: e.target.value})}
          />

          <TextField
            fullWidth
            placeholder="Addional information about meeting"
            variant="outlined"
            type="text"
            sx={{ my: 2 }}
            value={details.description}
            onChange={(e)=> setDetails({...details, description: e.target.value})}
          />
          <Button
            size="large"
            variant="outlined"
            color="warning"
            sx={{
              bgcolor: 'warning.light',
              color: 'warning.contrastText',
              border: '1px solid whitesmoke',
              borderRadius: '5px',
              ':hover': {bgcolor: 'warning.dark', color: 'warning.contrastText'}
              }}
            type="submit">Schedule meeting</Button>
        </Box>
      </Box>
      </form>
    </ContentWrapper>
  )
}

const mapDispatch = (dispatch) => ({
  schedule: (payload)=> dispatch(action.schedule(payload))
})

export default connect(null, mapDispatch)(NewSchedule);
