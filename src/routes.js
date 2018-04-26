import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import history from './history';
// import Test from './Components/Test'
import Home from './Components/Home'
import Feelings from './Components/Feelings'
import Auth from './Auth/Auth';

const auth = new Auth();

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div>
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route path="/home" render={() => <Home auth={auth} />} />
          <Route path="/feelings" render={(props) => <Feelings auth={auth} {...props} />} />
        </div>
      </Router>
  );
}
