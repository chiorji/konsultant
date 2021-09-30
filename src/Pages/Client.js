import React, {useEffect} from 'react';
import { Route, useRouteMatch, Switch, Redirect } from 'react-router-dom';

import ClientAuthLayout from '../Components/ClientAuthLayout';

const Client = () => {
  const match = useRouteMatch();

  useEffect(() => {
    console.log({ match })
  }, [match]);

  return (
    <ClientAuthLayout>
      <Switch>
        <Route path={`${match.path}`} exact component={()=><h3>Overview</h3>} />
        <Redirect from="/dashboard/*" to="/dashboard" />
      </Switch>
    </ClientAuthLayout>
  )
}

export default Client;
