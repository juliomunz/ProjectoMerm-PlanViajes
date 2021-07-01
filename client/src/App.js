import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,} from "react-router-dom";

import ViajesDetail from './views/Viajesdetail'
import Crearviajes from './views/Crearviajes';
import Registro from './views/Registro';
import Login from './views/Login';
import Misviajes from './views/Misviajes';
import Viajesdetail from './views/Viajesdetail'
//import Nav from './components/Nav';

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
              <Registro/>
          </Route>
          <Route exact path="/viajes/:id">
              <ViajesDetail/>
          </Route>
          <Route exact path="/Misviajes">
              <Misviajes/>
          </Route>
          <Route exact path="/create">
              <Crearviajes/>
          </Route>
          <Route exact path="/edit/:id">
              <Viajesdetail/>
          </Route>
          <Route exact path="/Login">
              <Login/>
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
