import React from 'react';
import {connect} from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link as RLink } from 'react-router-dom';

import * as action from '../store/auth/actions';

const ClientAuthTopNav = ({logout, fullname, avatar, role}) => {
  return (
    <AppBar position="fixed" elevation={0} sx={{bgcolor: 'primary.dark'}}>
      <Container sx={{ display: 'flex', py: 2 }}>
        <Box sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
          <Box
            component="img"
            src={avatar} 
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              fontWeight: 'bold',
              height: '40px',
              width: '40px',
              borderRadius: '50%',
              bgcolor: '#fff',
              color: 'primary.dark',
              mr: 2
            }}>
        </Box>
        <Typography
          variant="h5"
          component={RLink}
          to="/"
          sx={{ fontWeight: 'medium', textDecoration: 'none', color: '#fff' }}>
          {fullname}
        </Typography>
        </Box>
        <Typography sx={{
          minWidth: '40%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
          {role !== 'ADMIN' && <>
            <Typography
            component={RLink}
            to='/dashboard'
            sx={{mr: 3, color: '#fff', textDecoration: 'none'}}
          >Home</Typography>
          <Typography
            component={RLink}
            to='/dashboard/ap/book'
            sx={{mr: 3, color: '#fff', textDecoration: 'none'}}
          >New Meeting</Typography>
          <Typography
          component={RLink}
            to='/dashboard/ap/all'
            sx={{mr: 3, color: '#fff', textDecoration: 'none'}}
          >My Calendar</Typography>
          </>}
          {role === 'ADMIN' && <>
                <Typography
            component={RLink}
            to='/ad/admin/users'
            sx={{mr: 3, color: '#fff', textDecoration: 'none'}}
          >Users</Typography>
          <Typography
            component={RLink}
            to='/ad/admin/aps'
            sx={{mr: 3, color: '#fff', textDecoration: 'none'}}
          >Appointments</Typography>
          </>}
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

const mapState = ({auth}) => ({
  fullname: auth.fullname,
  avatar: auth.avatar,
  role: auth.role,
})

export default connect(mapState, mapDispatch)(ClientAuthTopNav);
