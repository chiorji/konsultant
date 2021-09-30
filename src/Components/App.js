import { Route } from 'react-router-dom';
import PrivateRoute from './Auth/PrivateRoute';
import Landing from '../Pages/Landing';

const App = () => {
  return (
    <>
      <PrivateRoute to='/dashboard' component={()=> <h2>Dashboard</h2>}/>
      <Route path="/" component={Landing} />
    </>
  );
}

export default App;
