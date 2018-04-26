import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { makeMainRoutes } from './routes';
import Header from './Components/Header'
import App from './App'


const routes = makeMainRoutes();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
