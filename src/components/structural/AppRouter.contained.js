import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import initialstate, { WebDataStates } from '../../redux/initial-state';
import { SET_USER } from '../../redux/types';
import { getStoredUser, setUserStore } from '../../configs/local-storage';
import { setAuthToken } from '../../configs/axios';

import TopMenu from '../shared/TopMenu';
import PrivateRoute from '../shared/PrivateRoute';

// pages components
import HomeContainer from '../pages/home/HomeContainer';
import SignUpContainer from '../pages/sign-up/SignUpContainer';
import FeelingsContainer from '../pages/feelings/FeelingsContainer';
import UniversityPost from '../pages/university_post/UniversityPost';

import Routes from './Routes';

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
          <Route path="/UniversityPosts" component={UniversityPost} />
          <PrivateRoute
            path="/feelings"
            component={FeelingsContainer}
            user={user}
          />
          <Routes user={user} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

const mapDispatchToProps = dispatch => ({
  logUserOff() {
    setAuthToken('');
    setUserStore(); // no arg = user.data from initialstate

    dispatch({
      type: SET_USER,
      user: initialstate.user,
    });
  },

  // TODO: Has same code like HomeContainer login. Refac later
  setStoredUser(userData) {
    if (userData.token.length === 0) {
      console.log('No user data found to auto log-in');
      return;
    }

    setAuthToken(userData.token);

    dispatch({
      type: SET_USER,
      user: {
        state: WebDataStates.SUCCESS,
        data: userData,
      },
    });
  },
});

const AppRouterContainer = connect(mapStateToProps, mapDispatchToProps)(AppRouter);

export default AppRouterContainer;
