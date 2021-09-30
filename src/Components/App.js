import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './Auth/PrivateRoute';
import Landing from '../Pages/Landing';
import Client from '../Pages/Client';

const App = () => {
  return (
    <Switch>
      <PrivateRoute path='/dashboard' component={Client}/>
      <Route path="/" component={Landing} />
    </Switch>
  );
}

export default App;
