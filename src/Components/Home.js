import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Link as RLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import bg from '../assets/kk.png';

const Home = () => {
  return (
    <Container
      component="main"
      maxWidth="xl"
      disableGutters
      sx={{
        background: '#fff',
        display: 'flex',
        minHeight: '100vh',
        flex: 1
      }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          minHeight: '100vh',
          width: '40%',
        }}>
        <Box sx={{
          width: { lg: 700 },
          height: '60%',
          pl: { xs: 2, md: 10 },
        }}>
        <Typography
          variant="h1"
            component="h1"
            color="primary.light"
          sx={{
            fontSize: {xs: 40, md: 60},
            fontWeight: 'medium',
            mb: 3
          }}>
            Konsultant
        </Typography>
          <Box sx={{
            color: 'grey',
            fontWeight: 'medium',
          }}>
            <Typography
              variant="h4"
              component="h5"
              color="text.secondary"
            >Your Code Personal Assistance</Typography>
            <Typography
              variant="body2"
              component="p"
              mt={1}
              color="grey.600"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto qui vel obcaecati atque exercitationem distinctio aliquid natus dolorum eum, mollitia adipisci iste inventore perspiciatis maxime quaerat molestias recusandae magnam eos.</Typography>
          <Button
            component={RLink}
            to="/login"
            sx={{
              borderRadius: '50px',
              mt: 5,
              color: 'warning.contrastText',
              bgcolor: 'warning.light',
              textDecoration: 'none',
              textTransform: 'none',
              p: 2,
              ':hover': {bgcolor: 'primary.light', color: 'light'}
            }}>Schedule a meeting</Button>
        </Box>
        </Box>
      </Box>
      
      <Box
        sx={{
        bgcolor: 'primary.light',
        display: 'flex',
        alignItems: 'center',
        minHeight: '100vh',
        width: '60%',
        borderBottomLeftRadius: '100%'
        }}>
        <Box
          sx={{
            bgcolor: 'primary.light',
            height: '400px',
            width: '400px',
            borderRadius: '50%',
            background: 'url(' + bg + ')',
            backgroundRepeat: 'no-repeat',
            border: '4px solid #42a5f5',
            backgroundSize: 'cover',
          }}
        ></Box>
      </Box>
    </Container>
  )
}

export default Home;
