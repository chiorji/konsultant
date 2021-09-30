import React from 'react';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link as RLink } from 'react-router-dom';

const UnAuthTopNav = () => {
  return (
    <AppBar position="fixed" elevation={0} sx={{bgcolor: 'transparent'}}>
      <Container maxWidth="xl" sx={{display: 'flex', py: 2}}>
        <Typography
          variant="h5"
          component={RLink}
          to="/"
          sx={{ flexGrow: 1, fontWeight: 'medium', textDecoration: 'none', color: 'primary.main' }}>
        Konsultant
        </Typography>
        <div>
          <Typography
            component={RLink}
            to="https://github.com/chiorji"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              mr: 5,
              textDecoration: 'none',
              color: 'text.primary',
              fontWeight: 'medium',
            }}
        >Hire Me</Typography>
        <IconButton sx={{color: 'primary.dark'}}>
          <MenuIcon />
        </IconButton>
        </div>
      </Container>
    </AppBar>
  )
}

export default UnAuthTopNav;
