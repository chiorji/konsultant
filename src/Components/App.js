import { BrowserRouter, Route } from 'react-router-dom';
import PrivateRoute from './Auth/PrivateRoute';
import Landing from '../Pages/Landing';

const App = () => {
  return (
    <BrowserRouter>
      <PrivateRoute to='/dashboard' component={()=> <h2>Dashboard</h2>}/>
      <Route path="/" component={Landing} />
    </BrowserRouter>
  );
}

export default App;
