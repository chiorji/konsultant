import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './Auth/PrivateRoute';
import Landing from '../Pages/Landing';
import Client from '../Pages/Client';
import Pages from '../Pages/Pages';

const App = () => {
  return (
    <Switch>
      <PrivateRoute path='/dashboard' component={Client} />
      <Route path="/k" component={Pages} />
      <Route path="/" exact component={Landing} />
    </Switch>
  );
}

export default App;
