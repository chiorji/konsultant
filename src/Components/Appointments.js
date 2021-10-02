import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import * as action from '../store/konsultant/actions';
import { MeetingCard } from './ClientHistoy';

const Appointments = ({ getSchedules, meetings, cancel }) => {


  useEffect(() => {
    getSchedules()
  }, [ getSchedules ])
  
  return (
    <>
      <Typography variant="h4" component="h2" sx={{fontWeight: 'medium'}}>
        Clients appointment history
      </Typography>

        <Typography variant="h6" component="p" sx={{my: 3, color: 'grey.600'}}>
        You have {' '}{meetings ? meetings.length : 0 }{' '}Scheduled meetings
      </Typography>

    <Box sx={{
        display: 'flex',
        mt: 4,
        flexWrap: 'wrap',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'flex-start'
      }}>
        {meetings && meetings.map((item, i) => (
          <MeetingCard {...item} cancel={cancel} key={i} />
        ))}
        {!meetings.length && <Typography
          variant="h2"
          component="h2"
          sx={{ color: 'warning.dark' }}>
          Nothing to display yet
        </Typography>}
      </Box>
    </>
)
}

const mapState = ({ konsultant }) => ({
  meetings: konsultant.schedules
})

const mapDispatch = (dispatch) => ({
  getSchedules: () => dispatch(action.getSchedules()),
  cancel: (id) => dispatch(action.cancelSchedule(id)),
})

export default connect(mapState, mapDispatch)(Appointments);
