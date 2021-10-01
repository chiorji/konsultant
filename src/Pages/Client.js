import React from 'react';
import { Route, useRouteMatch, Switch, Redirect } from 'react-router-dom';

import AuthTemplate from '../Template/AuthTemplate';
import Dashboard from '../Components/Dashboard';
import ClientHistory from '../Components/ClientHistoy';
import NewSchedule from '../Components/NewSchedule';

const Client = () => {
  const match = useRouteMatch();
  return (
    <AuthTemplate>
      <Switch>
        <Route path={`${match.path}`} exact component={Dashboard} />
        <Route path={`${match.path}/ap/book`} component={NewSchedule} />
        <Route path={`${match.path}/ap/all`} component={ClientHistory} />
        <Redirect from="/dashboard/*" to="/dashboard" />
      </Switch>
    </AuthTemplate>
  )
}

export default Client;
