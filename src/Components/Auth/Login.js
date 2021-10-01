import React, { useState } from 'react';
import { connect } from 'react-redux';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';

import * as action from '../../store/auth/actions';

const Login = ({authenticate}) => {  
  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

    const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const handleLogin = (e) => {
    e.preventDefault();
    console.log(process.env.NODE_ENV)
    const { email, password } = values;
    (email && password) && authenticate({email, password});
  }

  return (
    <Container maxWidth="xl">
      <Box component="section"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100vh',
        }}>
        <Box sx={{
          bgcolor: {xs: 'transparent', md: 'whitesmoke'},
          border: {xs: 'none', md: '1px solid whitesmoke'},
          borderRadius: '5px',
          p: { xs: 1, md: 4 },
          width: { lg: 400 }
        }}>
          <Typography variant="h4" sx={{mb: 4, textAlign: 'center'}}>Login</Typography>
          <form onSubmit={handleLogin}>
            <TextField
              fullWidth
              variant="outlined"
              label="Email"
              id="email"
              type="email"
              sx={{ my: 2 }}
              onChange={handleChange('email')}
            />
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="password" sx={{pt: 2}}>Password</InputLabel>
            <OutlinedInput
              fullWidth
              variant="outlined"
              label="Password"
              id="password"
              type={values.showPassword ? 'text' : 'password'}
              sx={{ my: 2 }}
              onChange={handleChange('password')}
              endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            />
            </FormControl>
            <Button
              type="submit"
              variant="outlined"
              size="large"
              sx={{
                width: '100%',
                my: 2,
                textTransform: 'none',
                bgcolor: 'primary.dark',
                color: '#fff',
                ':hover': {bgcolor: 'primary.dark', color: '#fff'}
              }}
            >Login</Button>
              {/* Sign up link */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
              <Typography
              variant="p"
              component={Link}
              to="/k/signup"
              sx={{fontSize: '14px', color: 'primary.main'}}
            >New to Konsultant, Sign up</Typography>
            <Typography
              variant="p"
              component={Link}
              to="/k/signup"
              sx={{fontSize: '14px', color: 'primary.main'}}
            >Forgot password?</Typography>
            </Box>
          </form>
        </Box>
      </Box>
    </Container>
  )
}

const mapDispatch = (dispatch) => ({
  authenticate: (payload) => dispatch(action.login(payload)),
});

export default connect(null, mapDispatch)(Login);
