import React, {useState} from 'react';
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
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


const Register = () => {
  
  const [ values, setValues ] = useState({
    fullname: '',
    email: '',
    password: '',
    sex: '', 
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


  const handleRegister = (e) => {
    e.preventDefault();
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
          <Typography variant="h4" sx={{mb: 4, textAlign: 'center'}}>Register</Typography>
          <form onSubmit={handleRegister}>
            <TextField
              fullWidth
              variant="outlined"
              label="Full name"
              id="fullname"
              type="text"
              sx={{ my: 2 }}
              value={values.fullname}
              onChange={handleChange('fullname')}
            />
            <TextField
              fullWidth
              variant="outlined"
              label="Email"
              id="email"
              type="email"
              sx={{ my: 2 }}
              value={values.email}
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
              value={values.password}
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
            <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel id="sex">Sex</InputLabel>
        <Select
          labelId="sex"
          id="sex"
          value={values.sex}
          label="Sex"
          onChange={handleChange('sex')}
        >
          <MenuItem value="Female">Female</MenuItem>
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Rather not say">Rather not say</MenuItem>
        </Select>
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
            >Register</Button>
              {/* Sign up link */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
              <Typography
              variant="p"
              component={Link}
              to="/login"
              sx={{fontSize: '14px', color: 'primary.main'}}
            >Already have an account, login</Typography>
            </Box>
          </form>
        </Box>
      </Box>
    </Container>
  )
}

export default Register;
