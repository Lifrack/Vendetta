import React from 'react';
import Pricetable from '../componentes/tabla-precios';
import {Container} from 'reactstrap';

function Precios(){
return (
        <div className="main">
            <Container>
                <h1>Costos para todas las necesidades</h1>
                <h6 className="text-danger">* Precios expresados en MXN (Moneda Mexicana Nacional).</h6>
            </Container>
            <Pricetable />
        </div>
);
}

export default Precios;