import React from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { WebDataStates } from './redux/initial-state';
import Home from './components/pages/home/Home';
import SignUpContainer from './components/pages/sign-up/SignUpContainer';
import Feelings from './components/pages/feelings/Feelings';


// Hight order component for Route. HOC -> Decorator of components
const PrivateRoute = ({ component: Component, user, ...rest }) => {

  // If user is logged, let him pass
  if (user.state === WebDataStates.SUCCESS && user.data.token) {
    return (
      <Route
        {...rest}
        render={(props) => <Component {...props} />}
      />
    );
  }

  // If user if not logged. Send him to homepage
  return (
    <Route
      {...rest}
      render={(props) => <Redirect to='/' />}
    />
  );
}


const AppRouter = ({ user }) => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/sign-up" component={SignUpContainer} />
        <PrivateRoute
          path="/feelings"
          component={Feelings}
          user={user}
        />
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = ({ user }) => {
  return {
    user
  }
}

const AppRouterContainer = connect(mapStateToProps)(AppRouter);

export default AppRouterContainer;