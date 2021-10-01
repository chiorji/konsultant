import React from 'react';
import {connect} from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import Template from '../Template/UnTemplate';
import Home from '../Components/Home';

const Landing = ({loggedIn, role}) => {
  return (
      (loggedIn && role === 'USER')
      ? <Redirect to='/dashboard' />
      :   (loggedIn && role === 'ADMIN')
      ? <Redirect to='/ad/admin' /> :
    <Template>
      <Switch>
        <Route path="/" exact component={Home} />
        <Redirect from="/*" to="/" />
      </Switch>
    </Template>
  )
}

const mapState = ({ auth }) => ({
  loggedIn: auth.isLoggedIn,
  role: auth.role,
})

export default connect(mapState)(Landing);
