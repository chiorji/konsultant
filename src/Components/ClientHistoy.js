import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import ContentWrapper from './ContentWrapper';
import * as action from '../store/client/actions';

const ClientHistoy = ({id, getSchedules, schedules, cancelSchedule}) => {
  useEffect(() => {
    getSchedules(id)
  }, [id, getSchedules])
  
  return (
    <ContentWrapper>
      <Typography variant="h4" component="h2" sx={{fontWeight: 'medium'}}>
        Appointment history and status
      </Typography>

      <Typography variant="body2" component="p"
        sx={{
          fontSize: '14px',
          mt: 1,
          width: {xs: '100%', md: '900px'}
        }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi voluptate necessitatibus expedita eos facilis, laborum modi quisquam sapiente perferendis impedit omnis. Repellendus quibusdam laboriosam culpa voluptatibus fuga rerum porro? Tempora.
      </Typography>
      <Box sx={{
        display: 'flex',
        mt: 4,
        flexWrap: 'wrap',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'flex-start'
      }}>
        {schedules && schedules.map((item, i) => (
          <MeetingCard {...item} cancel={cancelSchedule} key={i} />
        ))}
        {!schedules.length && <Typography
          variant="h2"
          component="h2"
          sx={{ color: 'warning.dark' }}>
          Nothing to display yet
        </Typography>}
      </Box>
    </ContentWrapper>
  )
}

function MeetingCard(item) {
  return (
    <Box key={item.id} sx={{
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '5px',
      minHeight: '200px',
      width: { xs: '100%', md: '350px' },
      mr: { xs: '0', md: 2 },
      mb: 2,
      p: 2,
      bgcolor: 'grey.50',
    }}>
      <Typography variant="h6">{item.title}</Typography>
      <Typography my={2}>{item.description}</Typography>
      <Typography variant="body1" mb={2}><b>Date/Time:</b> {item.date}</Typography>
      <Button
        size="small"
        variant="contained"
        disableElevation
        sx={{
          textTransform: 'none',
          marginTop: 'auto',
          alignSelf: 'flex-start',
          color: 'warning.light',
          bgcolor: 'warning.contrastText',
          ':hover': {color: 'warning.dark', bgcolor: 'warning.contrastText'}
        }}
        onClick={()=> item.cancel(item.id)}
        >
          Cancel Appointment
      </Button>
    </Box>
  )
}

const mapState = ({ auth, client }) => ({
  id: auth.id,
  schedules: client.schedules
})

const mapDispatch = (dispatch) => ({
  getSchedules: (payload) => dispatch(action.getSchedules(payload)),
  cancelSchedule: (payload) => dispatch(action.cancelSchedule(payload)),
})

export default connect(mapState, mapDispatch)(ClientHistoy);
