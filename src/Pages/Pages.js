import React from 'react';
import {connect} from 'react-redux';
import { Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';

import {UnTempOthers} from '../Template/UnTemplate';
import Login from '../Components/Auth/Login';
import Register from '../Components/Auth/Register';

const Pages = ({ loggedIn, role }) => {
  const match = useRouteMatch()
  return (
    (loggedIn && role === 'USER')
      ? <Redirect to='/dashboard' />
      :   (loggedIn && role === 'ADMIN')
      ? <Redirect to='/ad/admin' /> :
    <UnTempOthers>
      <Switch>
        <Route path={`${match.path}/login`} component={Login} />
        <Route path={`${match.path}/signup`} component={Register} />
        {/* <Redirect from="/*" to="/" /> */}
      </Switch>
    </UnTempOthers>
  )
}

const mapState = ({ auth }) => ({
  loggedIn: auth.isLoggedIn,
  role: auth.role,
})

export default connect(mapState)(Pages);
