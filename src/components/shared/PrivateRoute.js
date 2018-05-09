import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { WebDataStates } from '../../redux/initial-state';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  // If user is logged, let him pass
  if (user.state === WebDataStates.SUCCESS && user.data.token) {
    return (
      <Route
        {...rest}
        render={props => <Component {...props} />}
      />
    );
  }

  // If user if not logged. Send him to homepage
  return (
    <Route
      {...rest}
      render={props => <Redirect to="/" />}
    />
  );
};

export default PrivateRoute;
