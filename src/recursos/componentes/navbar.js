import React from 'react';
import '../css/navbar.css';
import LoginForm from '../componentes/login';
import {BrowserRouter, Route} from 'react-router-dom';

function Navbar() {
  return (
    <div className="App">
      <nav className="navbar" className="navbar navbar-expand-lg shadow p-3 mb-5 bg-white rounded">
  <a className="navbar-brand">Vendetta</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Características</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Plugins</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Precios</a>
      </li>
      <li className="nav-item">
        <a className="btn btn-outline-success" href="#" onClick={LoginForm}>Ir al panel</a>
      </li>
    </ul>
  </div>
</nav>
      </div>
  );
}

export default Navbar;
