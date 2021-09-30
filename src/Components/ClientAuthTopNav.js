import React from 'react';
import {connect} from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link as RLink } from 'react-router-dom';

import * as action from '../store/auth/actions';

const ClientAuthTopNav = ({logout}) => {
  return (
    <AppBar position="fixed" elevation={0} sx={{bgcolor: 'primary.dark'}}>
      <Container sx={{display: 'flex', py: 2}}>
        <Typography
          variant="h5"
          component={RLink}
          to="/"
          sx={{ flexGrow: 1, fontWeight: 'medium', textDecoration: 'none', color: '#fff' }}>
          Konsultant
        </Typography>
        <Typography sx={{
          minWidth: '40%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
          <Typography
            component={RLink}
            to='/dashboard/ap/book'
            sx={{mr: 3, color: '#fff', textDecoration: 'none'}}
          >Book Appointment</Typography>
          <Typography
          component={RLink}
            to='/dashboard/ap/all'
            sx={{mr: 3, color: '#fff', textDecoration: 'none'}}
          >List Appointments</Typography>
          <Button
            size="medium"
            variant="contained"
            disableElevation
            sx={{ color: 'primary', textTransform: 'none' }}
            onClick={logout}
          >Log out</Button>
        </Typography>
      </Container>
    </AppBar>
  )
}

const mapDispatch = (dispatch) => ({
  logout: () => dispatch(action.logout())
})

export default connect(null, mapDispatch)(ClientAuthTopNav);
