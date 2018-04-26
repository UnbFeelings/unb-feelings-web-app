import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import history from './history';
import Test from './Components/Test'
import Home from './Components/Home'
import FeelingsPageForm from './Components/FeelingsPageForm'
import Header from './Components/Header'

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div>
          <Header/>
          <Route path="/" render={() => <Home />} />
          <Route path="/test" render={() => <Test />} />
          <Route path="/feelingsPage" render={(props) => <FeelingsPageForm {...props}/>} />
        </div>
      </Router>
  );
}
