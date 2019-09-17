import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../css/navbar.css';
import Caracteristicas from '../templates/caracteristicas';
import Landingpage from '../templates/landingpage';

function Navbar() {
  return (
<Router>
      <nav className="navbar" className="navbar navbar-expand-lg shadow p-3 mb-5 bg-white rounded">
  <Link to="/" className="navbar-brand">Vendetta</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link to="/caracteristicas" className="nav-link">Caracteristicas</Link>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Plugins</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Precios</a>
      </li>
      <li className="nav-item">
        <a className="btn btn-outline-success" href="#">Ir al panel</a>
      </li>
    </ul>
  </div>
</nav>

<Route exact path="/" component={Landingpage} />
<Route path="/caracteristicas" component={Caracteristicas} />

</Router>
  );
}

export default Navbar;
