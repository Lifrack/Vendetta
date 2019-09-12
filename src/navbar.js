import React from 'react';
//import './navbar.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar" className="navbar navbar-expand-lg shadow p-3 mb-5 bg-white rounded">
  <a className="navbar-brand" onClick="">Vendetta</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Características <span className="sr-only">(current)</span></a>
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
      </div>
  );
}

export default App;
