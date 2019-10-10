import React from 'react';
import '../sass/tabla-precios.scss';

function Pricetable(){
return (
            <div className="App">
                <div class="price-table-wrapper">
                <div class="pricing-table">
                        <h2 class="pricing-table__header">- Free -</h2>
                        <h3 class="pricing-table__price">$0/mes</h3>
                        <a target="_blank" class="pricing-table__button" href="http://www.digimadmedia.com">
                            Quiero probar!
                        </a>
                        <ul class="pricing-table__list">
                            <li>1 Empleado</li>
                            <li>Almacen de productos y <br/> servicios ilimitado</li>
                            <li>Sin soporte técnico</li>
                            <li>Todos los plugins son <br/> con costo adicional</li>
                        </ul>
                    </div>
                    <div class="pricing-table">
                        <h2 class="pricing-table__header">- MICRO -</h2>
                        <h3 class="pricing-table__price">$199/mes</h3>
                        <a target="_blank" class="pricing-table__button" href="http://www.digimadmedia.com">
                            Lo quiero!
                        </a>
                        <ul class="pricing-table__list">
                            <li>Hasta 5 Empleados</li>
                            <li>Almacen de productos y <br/> servicios ilimitado</li>
                            <li>Soporte técnico <br/> personalizado por correo</li>
                            <li>1 Plugin sin costo adicional</li>
                        </ul>
                    </div>
                    <div class="pricing-table">
                        <h2 class="pricing-table__header">- PRO -</h2>
                        <h3 class="pricing-table__price">$1,999/mes</h3>
                        <a target="_blank" class="pricing-table__button" href="http://www.digimadmedia.com">
                            A lo que vengo!
                        </a>
                        <ul class="pricing-table__list">
                            <li>Hasta 50 Empleados</li>
                            <li>Almacen de productos y <br/> servicios ilimitado</li>
                            <li>Soporte técnico <br/> personalizado por chat</li>
                            <li>Todos los plugins <br/>sin costo adicional</li>
                        </ul>
                    </div>
                    <div class="pricing-table">
                        <h2 class="pricing-table__header">- PREMIUM -</h2>
                        <h3 class="pricing-table__price">$5,199/mes</h3>
                        <a target="_blank" class="pricing-table__button" href="http://www.digimadmedia.com">
                            A triunfar!
                        </a>
                        <ul class="pricing-table__list">
                            <li>Empleados ilimitados</li>
                            <li>Almacen de productos y <br/> servicios ilimitado</li>
                            <li>Soporte técnico <br/> personalizado por telefono</li>
                            <li>Todos los plugins <br/>sin costo adicional</li>
                        </ul>
                    </div>
                </div>
            </div>
);
}

export default Pricetable;