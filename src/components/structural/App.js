import React from 'react';
import { Provider } from 'react-redux';

import store from '../../redux/store';
import AppRouter from './AppRouter.contained';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </div>
    );
  }
}

export default App;
