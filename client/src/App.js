import React from 'react';
import { Route } from 'react-router-dom'

//components
import Register from './Components/Auth/register'
import Login from './Components/Auth/login'
import PrivateRoute from './utilities/PrivateRoute'
import Dashboard from './Components/Dashboard'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path='/' component={Register} />
      <Route exact path='/login' component={Login} />
      <PrivateRoute path='/dashboard' component={Dashboard} />
    </div>
  );
}

export default App;
