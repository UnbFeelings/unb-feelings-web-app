import React from 'react';
import { Route, Router, Redirect } from 'react-router-dom';
import App from './App';
import history from './history';
// import Test from './Components/Test'
import Home from './Components/Home'
import Feelings from './Components/Feelings'

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div>
          <Route path="/" render={(props) => <App {...props} />} />
          <Route path="/home" render={() => <Home />} />
          <Route path="/feelings" render={(props) => <Feelings {...props} />} />

          <Redirect from="/" to="/home"/>
        </div>
      </Router>
  );
}
