import React from 'react';
import Container from '@mui/material/Container';

const ContentWrapper = ({children}) => {
  return (
    <Container sx={{
      minHeight: { xs: '400px', md: '600px' },
      position: 'relative',
      mt: {xs: 15, md: 15},
      py: 2,
      mb: 5
    }}>
    {children}
    </Container>
  )
}

export default ContentWrapper;
