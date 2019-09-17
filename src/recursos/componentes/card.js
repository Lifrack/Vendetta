import React from 'react';
import Botonlink from './boton';

function Bcard(props){
    if (typeof props.placeholderBoton === 'undefined') {
        return (
            <div className="Bcard">
                <div className="card shadow-sm p-3 mb-5 bg-white rounded medium">
                <img src={props.imagen} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{props.titulo}</h5>
                        <p className="card-text">{props.texto}</p>
                    </div>
                </div>
            </div>
        );
    }else{
        return (
            <div className="Bcard">
                <div className="card shadow-sm p-3 mb-5 bg-white rounded medium">
                <img src={props.imagen} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{props.titulo}</h5>
                        <p className="card-text">{props.texto}</p>
                        <Botonlink link={props.botonRuta} texto={props.placeholderBoton} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Bcard;