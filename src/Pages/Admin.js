import React from 'react';
import { Route, useRouteMatch, Switch, Redirect } from 'react-router-dom';

import { AdminTemp } from '../Template/AuthTemplate';
import ContentWrapper from '../Components/ContentWrapper';
import Users from '../Components/Users';
import Appointments from '../Components/Appointments';

const Admin = () => {
  const match = useRouteMatch();
  return (
    <AdminTemp>
      <ContentWrapper>
        <Switch>
          <Route path={`${match.path}/users`} exact component={Users} />
          <Route path={`${match.path}/aps`} exact component={Appointments} />
          <Redirect from="/ad/admin/*" to="/ad/admin/users" />
      </Switch>
      </ContentWrapper>
    </AdminTemp>
  )
}

export default Admin;
