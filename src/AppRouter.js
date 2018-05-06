import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './components/pages/home/Home';
import SignUpContainer from './components/pages/sign-up/SignUpContainer';
import Feelings from './components/pages/feelings/Feelings';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/sign-up" component={SignUpContainer} />
        <Route path="/feelings" component={Feelings} />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;