import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../css/navbar.scss';
import Caracteristicas from '../templates/caracteristicas';
import Landingpage from '../templates/landingpage';
import Plugins from '../templates/plugins';
import Precios from '../templates/precios';

function Navbar() {
  return (
<Router>
      <nav className="navbar" className="navbar fixed-top navbar-expand-lg shadow p-3 mb-5 bg-white rounded">
  <Link to="/" className="navbar-brand">Vendetta</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/caracteristicas" className="nav-link">Caracteristicas</Link>
      </li>
      <li className="nav-item">
      <Link to="/plugins" className="nav-link">Plugins</Link>
      </li>
      <li className="nav-item">
      <Link to="/precios" className="nav-link">Precios</Link>
      </li>
    </ul>
  </div>
</nav>

<Route exact path="/" component={Landingpage} />
<Route path="/caracteristicas" component={Caracteristicas} />
<Route path="/plugins" component={Plugins} />
<Route path="/precios" component={Precios} />

</Router>
  );
}

export default Navbar;
