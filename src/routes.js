import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import history from './history';
import Test from './Components/Test'
import Home from './Components/Home'

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div>
          <Route path="/" render={(props) => <App {...props} />} />
          <Route path="/home" render={() => <Home />} />
          <Route path="/test" render={() => <Test />} />
        </div>
      </Router>
  );
}
