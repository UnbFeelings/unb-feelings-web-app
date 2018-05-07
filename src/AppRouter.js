import React from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { WebDataStates } from './redux/initial-state';
import HomeContainer from './components/pages/home/HomeContainer';
import SignUpContainer from './components/pages/sign-up/SignUpContainer';
import FeelingsContainer from './components/pages/feelings/FeelingsContainer';


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
        <Route exact path="/" component={HomeContainer} />
        <Route path="/sign-up" component={SignUpContainer} />
        <PrivateRoute
          path="/feelings"
          component={FeelingsContainer}
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