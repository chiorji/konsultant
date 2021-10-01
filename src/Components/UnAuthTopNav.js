import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Twitter, GitHub } from '@mui/icons-material';
import { Link as RLink } from 'react-router-dom';
import Link from '@mui/material/Link';

const UnAuthTopNav = (props) => {
  return (
    <AppBar position="fixed" elevation={0} sx={{bgcolor: props.color || 'transparent'}}>
      <Container maxWidth="xl" sx={{
        display: 'flex',
        py: 2,
        px: { xs: 2, md: 10 },
      }}>
        <Typography
          variant="h5"
          component={RLink}
          to="/"
          sx={{ flexGrow: 1, fontWeight: 'medium', textDecoration: 'none', color: props.textColor || 'text.secondary' }}>
        Konsultant
        </Typography>
        <div>
            <Typography
              component={Link}
              sx={{color: '#fff', mr: 3}}
              href="https://github.com/chiorji/konsultant" target="_blank" rel="noopener noreferrer">
              <GitHub fontSize="large"/>
            </Typography>
            <Typography
              component={Link}
              sx={{color: '#fff'}}
              href="https://www.twitter.com/@ChigboguOrji" target="_blank" rel="noopener noreferrer">
              <Twitter fontSize="large"/>
            </Typography>
        </div>
      </Container>
    </AppBar>
  )
}

export default UnAuthTopNav;
