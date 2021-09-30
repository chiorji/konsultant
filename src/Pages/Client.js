import React, {useEffect} from 'react';
import { Route, useRouteMatch, Switch, Redirect } from 'react-router-dom';

import AuthTemplate from '../Template/AuthTemplate';

const Client = () => {
  const match = useRouteMatch();

  useEffect(() => {
    console.log({ match })
  }, [match]);

  return (
    <AuthTemplate>
      <Switch>
        <Route path={`${match.path}`} exact component={()=><h3>Overview</h3>} />
        <Redirect from="/dashboard/*" to="/dashboard" />
      </Switch>
    </AuthTemplate>
  )
}

export default Client;
