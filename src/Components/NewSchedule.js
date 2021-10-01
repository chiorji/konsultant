import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';

import ContentWrapper from './ContentWrapper';

const NewSchedule = () => {
  
  const [value, setValue] = useState(new Date());
  return (
    <ContentWrapper>
      <Typography variant="h4" component="h2" sx={{fontWeight: 'medium'}}>
        Schedule new meeting
      </Typography>

      <form onSubmit={(e) => e.preventDefault()}>
        <Box sx={{display: 'flex', my: 5, flexDirection: {xs: 'column', md: 'row'}}}>
        <Box sx={{width: {xs: '100%', md: '600px'}}}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
              orientation="landscape"
              openTo="day"
              value={value}
              shouldDisableDate={isWeekend}
              onChange={(newValue) => {
                setValue(newValue);
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
          />

          <TextField
            fullWidth
            placeholder="Addional information about meeting"
            variant="outlined"
            type="text"
            sx={{ my: 2 }}
          />
          <Button
            size="large"
            sx={{border: '1px solid whitesmoke', borderRadius: '5px', p: 2}}
            type="submit">Schedule meeting</Button>
        </Box>
      </Box>
      </form>
    </ContentWrapper>
  )
}

export default NewSchedule;
