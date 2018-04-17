import ReactDOM from 'react-dom';
import './index.css';
import { makeMainRoutes } from './routes';
import 'bootstrap/dist/css/bootstrap.css';

const routes = makeMainRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root')
);
