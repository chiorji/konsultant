import React from 'react';
import Container from '@mui/material/Container';

const ContentWrapper = ({children}) => {
  return (
    <Container sx={{
      minHeight: { xs: '400px', md: '600px' },
      position: 'relative',
      // border: '1px solid red',
      mt: {md: 10},
      py: 2
    }}>
    {children}
    </Container>
  )
}

export default ContentWrapper;
