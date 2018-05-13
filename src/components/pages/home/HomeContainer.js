import { connect } from 'react-redux';
import Home from './Home';

import { SET_USER } from '../../../redux/types';
import { WebDataStates } from '../../../redux/initial-state';
import axios, { setAuthToken } from '../../../configs/axios';
import { setUserStore } from '../../../configs/local-storage';

const mapStateToProps = ({ user }) => ({
  user,
});

const mapDispatchToProps = dispatch => ({
  async loginUser({ email, password }) {
    try {
      const auth = await axios.post('/token-auth/', { email, password });

      setAuthToken(auth.data.token);

      const user = await axios.get(`/users/${auth.data.user}/`);

      if (user.status === 200) {
        const userData = { ...user.data, token: auth.data.token };

        setUserStore(userData);

        dispatch({
          type: SET_USER,
          user: {
            state: WebDataStates.SUCCESS,
            data: userData,
          },
        });
      }
    } catch (error) {
      throw error;
    }
  },
});

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default HomeContainer;
