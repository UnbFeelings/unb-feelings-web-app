import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './components/pages/home/Home';
import SignUp from './components/pages/sign-up/SignUp';


const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/sign-up" component={SignUp} />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;