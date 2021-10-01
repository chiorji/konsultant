import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect } from 'react-redux';

const PrivateRoute = ({component: Component, token, role, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => (token && role)
        ? <Component {...props} />
        : <Redirect to="/k/login" />}
    />
  )
}

const mapState = ({ auth }) => ({
  role: auth.role,
  token: auth.token,
})

export default connect(mapState)(PrivateRoute);
