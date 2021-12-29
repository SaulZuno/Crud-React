import './App.css';

import Listar from "./componentes/Listar"
import Crear from "./componentes/Crear"
import Editar from "./componentes/Editar"

import { Route, BrowserRouter as Router, } from "react-router-dom";

import {Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="nav navbar-nav">
              <Link className="nav-item nav-link active" to={"/"}>Sistema <span className="sr-only">(current)</span></Link>
          </div>
      </nav>
    <div className="container">
    <br></br>
      
      <Route exact path="/" component={Listar}></Route>
      <Route exact path="/crear" component={Crear}></Route>
      <Route exact path="/editar/:id" component={Editar}></Route>

    </div>
    </Router>
  );
}

export default App;
