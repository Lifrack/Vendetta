import React from 'react';

function Bcard(props){
    return (
        <div className="Bcard">
            <div className="card shadow-sm p-3 mb-5 bg-white rounded">
            <img src={props.imagen} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{props.titulo}</h5>
                    <p className="card-text">{props.texto}</p>
                    <a href="#" className="btn btn-primary">{props.placeholderBoton}</a>
                </div>
            </div>
        </div>
    );
}

export default Bcard;