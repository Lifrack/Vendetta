import React from 'react';
import './footer.css';

function Footer(){
return (
        <div className="Footer">
            <div className="container">
                <div className="footer_trust_top">
                    <p>AS FEATURED IN</p>
                    <div className="trustlogos">
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-xs-12 footer_main">
                    <div className="col-xs-5 col-md-3 footer-left">
                        <h4>Find Out More</h4>
                        <ul className="footer_list">
                            <li><a href="">About Us</a></li>
                            <li><a href="">Reviews</a></li>
                            <li><a href="">FAQ's</a></li>
                            <li><a href="">Policies</a></li>
                            <li><a href="">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-xs-7 col-md-3 col-md-push-6 footer-right">
                        <div className="footerbox">
                            <h4>Contact Us</h4>
                            <p>We're ready to help!</p>
                            <ul className="footer_list">
                                <li>USA | CANADA</li>
                                <li className="phone">+1 555 555 5555</li>
                                <li>UK | IRELAND</li>
                                <li className="phone">+555 5 555 5555</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="col-lg-3 col-md-12 footer_copyright">
                        <p>©2018 All rights reserved.</p>
                    </div>
                    <div className="col-md-9 col-xs-12 footer__partners">
                        <img src="https://www.authenticireland.com/wp-content/uploads/2018/04/Bottom_Trust2.png" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;