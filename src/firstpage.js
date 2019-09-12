import React from 'react';
import Navbar from './navbar';
import Bcard from './card';
import imgone from './card1.png';
import Footer from './footer';

function Firstpage() {
  return (
      <div className="Firstpage">
      <Navbar />
      <div className="container">
          <div className="row">
              <div className="col-sm-12 col-md-4">
                  <Bcard 
                  imagen={imgone}
                  titulo="Gestiona tus ventas"
                  texto="En Vendetta podras ver todas y cada una
                  de las ventas en tu negocio."
                  placeholderBoton="Saber más..."
                  />
              </div>
              <div className="col s12 m4"></div>
              <div className="col s12 m4"></div>
          </div>
      </div>
      <Footer />
      </div>
  );
}

export default Firstpage;
