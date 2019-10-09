import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import imgone from '../img/card1.png';
import imgtwo from '../img/card2.jpg';

function Caracteristicas(){
    return (
        <div className="main">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                            <Card>
                                <CardImg top width="100%" src={imgone} />
                                <CardBody>
                                    <CardTitle>Gestiona tus ventas</CardTitle>
                                    <CardText>
                                        En Vendetta podras ver todas y cada una
                                        de las ventas en tu negocio en tiempo real, gracias a nuestra tecnologia
                                        Lieal-real-time.
                                    </CardText>
                                </CardBody>
                            </Card>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <Card>
                                <CardImg top width="100%" src={imgtwo} />
                                <CardBody>
                                    <CardTitle>Dale más poder</CardTitle>
                                    <CardText>
                                        Vendetta tiene plugins que te harán la vida
                                        mas fácil a la hora de administrar tu negocio.
                                    </CardText>
                                </CardBody>
                            </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Caracteristicas;