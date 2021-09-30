import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from '../Components/UnAuthLayout';
import Home from '../Components/Home';
import Login from '../Components/Auth/Login';
import Register from '../Components/Auth/Register';

const Landing = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Register} />
        <Redirect from="/*" to="/" />
      </Switch>
    </Layout>
  )
}

export default Landing;
