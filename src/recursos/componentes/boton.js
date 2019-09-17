import React from 'react';
import { Link } from 'react-router-dom';

function Botonlink(props){
    return (
        <Link className="btn btn-primary" to={props.link} >{props.texto}</Link>
    );
}

export default Botonlink;