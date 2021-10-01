import React from 'react';
// import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import ContentWrapper from './ContentWrapper';

const ClientHistoy = () => {
  return (
    <ContentWrapper>
      <Typography variant="h5" component="h2" sx={{fontWeight: 'medium'}}>
        Appointment history and status
      </Typography>
    </ContentWrapper>
  )
}

export default ClientHistoy;
