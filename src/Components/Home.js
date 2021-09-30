import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Facebook, Twitter, GitHub } from '@mui/icons-material';
import Link from '@mui/material/Link';
import { Link as RLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';

import bg from '../assets/kk.png';

const Home = () => {
  return (
    <Container
      component="main"
      maxWidth="xl"
      disableGutters
      sx={{
        background: 'white'
      }}>
      <Box
        component="section"
        sx={{
          background: 'url(' + bg + ')',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '140% 60%',
          backgroundSize: '1000px',
          // backgroundBlendMode: 'light',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          width: '100vw',
          height: '100vh',
        }}>
        <Box sx={{width: {lg: 700}}}>
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: {xs: 40, md: 90},
            fontWeight: 'bold',
            textAlign: 'right'
          }}>
            Kode<br/>Konsultant
        </Typography>
        <Box sx={{textAlign: 'right', color: 'grey'}}>
          <Typography component="p">Your Code</Typography>
          <Typography component="p">Personal Assistance</Typography>
        </Box>
        </Box>
        <Typography
          component={RLink}
          to="/login"
          sx={{
            borderRadius: '5px',
            position: 'absolute',
            bottom: 60,
            border: '1px solid #1976d2',
            color: '#fff',
            bgcolor: 'primary.light',
            textDecoration: 'none',
            alignSelf: 'center',
            p: 2,
            ':hover': {bgcolor: 'primary.dark', color: 'light'}
          }}>Schedule An Appointment</Typography>

        <Box
          sx={{
            position: 'fixed',
            right: 0,
            top: 0,
            bottom: 0,
            width: 60,
            bgcolor: 'primary.dark',
            display: 'flex',
            flexDirection: 'column',
          }}>
          <Box sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
            pb: 4
          }}>
            <Typography
              component={Link}
              sx={{color: '#fff'}}
              href="https://github.com/chiorji/konsultant" target="_blank" rel="noopener noreferrer">
              <GitHub fontSize="large"/>
            </Typography>
            <Typography
              component={Link}
              sx={{my: 2, color: '#fff'}}
              href="https://www.facebook.com/orjichigbogu" target="_blank" rel="noopener noreferrer">
              <Facebook fontSize="large"/>
            </Typography>
            <Typography
              component={Link}
              sx={{color: '#fff'}}
              href="https://www.twitter.com/@ChigboguOrji" target="_blank" rel="noopener noreferrer">
              <Twitter fontSize="large"/>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default Home;
