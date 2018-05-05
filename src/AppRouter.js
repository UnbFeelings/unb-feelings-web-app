import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './components/pages/home/Home';


const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;