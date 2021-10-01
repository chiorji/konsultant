import React from 'react';
import {connect} from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import Template from '../Template/UnTemplate';
import Home from '../Components/Home';

const Landing = ({loggedIn}) => {
  return (
    loggedIn ? <Redirect to='/dashboard' /> :
    <Template>
      <Switch>
        <Route path="/" exact component={Home} />
        <Redirect from="/*" to="/" />
      </Switch>
    </Template>
  )
}

const mapState = ({ auth }) => ({
  loggedIn: auth.isLoggedIn
})

export default connect(mapState)(Landing);
