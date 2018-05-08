import React from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import initialstate, { WebDataStates } from './redux/initial-state';
import { SET_USER } from './redux/types';
import { getStoredUser, setUserStore } from './configs/local-storage';
import { setAuthToken } from './configs/axios';

import TopMenu from './components/shared/TopMenu';

// pages components
import HomeContainer from './components/pages/home/HomeContainer';
import SignUpContainer from './components/pages/sign-up/SignUpContainer';
import FeelingsContainer from './components/pages/feelings/FeelingsContainer';


// TODO: Should be imported from another file
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


class AppRouter extends React.Component {
  componentWillMount() {
    // If user just entered the app. see if he has saved data on the device/browser
    // and make a auto log in.
    if (this.props.user.state === WebDataStates.NOT_REQUESTED) {
      const storedUser = getStoredUser();
      this.props.setStoredUser(storedUser);
    }
  }

  render() {
    const { user, logUserOff } = this.props;

    return (
      <BrowserRouter>
        <div>
          {user.state === WebDataStates.SUCCESS ?
            <TopMenu logUserOff={logUserOff} />
            :
            null
          }

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
}

const mapStateToProps = ({ user }) => {
  return {
    user
  }
}

const mapDispatchToProps = (dispatch) => ({
  logUserOff() {
    setAuthToken("");
    setUserStore(); // no arg = user.data from initialstate

    dispatch({
      type: SET_USER,
      user: initialstate.user
    });
  },

  // TODO: Has same code like HomeContainer login. Refac later
  setStoredUser(userData) {
    if (userData.token.length === 0) {
      console.log("No user data found to auto log-in");
      return;
    }

    setAuthToken(userData.token);

    dispatch({
      type: SET_USER,
      user: {
        state: WebDataStates.SUCCESS,
        data: userData
      }
    });
  }
});

const AppRouterContainer = connect(
  mapStateToProps, mapDispatchToProps
)(AppRouter);

export default AppRouterContainer;