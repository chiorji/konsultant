import React from 'react';
import {connect} from 'react-redux';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link as RLink } from 'react-router-dom';
import Button from '@mui/material/Button';

import ContentWrapper from './ContentWrapper';

const Dashboard = ({auth}) => {
  return (
    <ContentWrapper>
      <Box sx={{
        minHeight: '500px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Typography variant="h6" component="h3" mt={2}
          sx={{color: '#999'}}
        >{auth.email}</Typography>
        <Typography
          variant="h3"
          component="h3"
          mt={3}
          fontWeight="bold"
          textAlign= 'center'
        >
          <small>Welcome to</small><br /> kode konsultant,
        </Typography>
        <Typography variant="body1" component="p" mt={3}
        sx={{width: {xs: '100%', md: 550}, textAlign: 'center'}}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis nam fugit est nobis ipsum ipsa placeat quasi quisquam earum ad autem reiciendis voluptatibus labore quo, modi doloribus excepturi et!
        </Typography>

        <Box component="div" sx={{
          mt: 10,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          minWidth: {xs: '100%', md: '500px'}
        }}>
          <LinkButton label="Schedule A Meeting" color="#fff"  slug="book"/>
          <LinkButton label="My Calendar"  variant="outlined" slug="all" />
        </Box>
      </Box>
    </ContentWrapper>
  )
}

function LinkButton(props) {
  return (
    <Button
      component={RLink}
      size="large"
      disableElevation
      variant={props.variant || 'contained'}
      to={'/dashboard/ap/' + props.slug} 
      sx={{
        color: props.color,
        bgcolor: props.bgcolor,
        p: 2,
        minWidth: {md: '220px'}
      }}
     >
      {props.label}
    </Button>
  )
}

const mapState = ({ auth }) => ({
 auth: auth
})

export default connect(mapState)(Dashboard);
