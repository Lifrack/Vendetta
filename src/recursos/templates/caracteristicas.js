import React from 'react';
import Bcard from '../componentes/card'
import imgone from '../img/card1.png'
import imgtwo from '../img/card2.jpg'

function Caracteristicas(){
    return (
        <div className="container">
          <div className="row">
              <div className="col-sm-12 col-md-4">
                  <Bcard
                  imagen={imgone}
                  titulo="Gestiona tus ventas"
                  texto="En Vendetta podras ver todas y cada una
                  de las ventas en tu negocio."
                  />
              </div>
              <div className="col s12 m4">
              <Bcard
                  imagen={imgtwo}
                  titulo="Dale más poder"
                  texto="Vendetta tiene plugins que te harán la vida
                  mas fácil a la hora de administrar tu negocio."
                  />
              </div>
              <div className="col s12 m4">

              </div>
          </div>
      </div>
    );
}

export default Caracteristicas;