import React from 'react';
import Navbar from '../componentes/navbar';
import Bcard from '../componentes/card';
import imgone from '../img/card1.png';
import Footer from '../componentes/footer';

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
