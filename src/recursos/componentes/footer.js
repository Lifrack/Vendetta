import React from 'react';
import '../css/footer.css';
import imgfacebook from '../img/facebook.png'
import imgyoutube from '../img/youtube.png'
import imgemail from '../img/email.png'

function Footer(){
return (
<div className="Footer">
    <footer>
        <div className="container">
            <div className="row">

                <div className="col-sm-12 col-md-6">
                    <h3>Mapa del sitio</h3>
                    <ul className="list-unstyled three-column">
                        <li>Inicio</li>
                        <li>Caracteristicas</li>
                        <li>Precio</li>
                        <li>Plugins</li>
                        <li>Nosotros</li>
                        <li>Contacto</li>
                    </ul>
                    <ul className="list-unstyled socila-list">
                        <li><img src={imgfacebook} /></li>
                        <li><img src={imgyoutube} /></li>
                        <li><img src={imgemail} /></li>
                    </ul>
                </div>

                <div className="col-sm-12 col-md-6">
                    <h3>Grupo Lifrack</h3>

                    <div className="media">
                        <a href="#" className="pull-left">
                            <img src="http://placehold.it/64x64" alt="" className="media-object" />
                        </a>
                        <div className="media-body">
                            <h4 className="media-heading">LiTelSoFT</h4>
                            <p>Redes inalambricas de alta capacidad con disponibilidad del 99.9%,
                                 Sitios web y proyectos de software de todo tipo.</p>
                        </div>
                    </div>

                    <div className="media">
                        <a href="#" className="pull-left">
                            <img src="http://placehold.it/64x64" alt="" className="media-object" />
                        </a>
                        <div className="media-body">
                            <h4 className="media-heading">SimeTrick</h4>
                            <p>Paqueteria, ¡como debe ser!.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className="copyright text-center">
            Copyright &copy; 2020 <span>Vendetta</span>
        </div>
    </footer>
</div>
);
}

export default Footer;