import React from 'react';
import '../css/landing.scss';

function Landingpage() {
    return (
        <div className="Landingpage">
  <header className="masthead text-white text-center">
    <div className="overlay"></div>
    <div className="container">
      <div className="row">
        <div className="col-xl-9 mx-auto">
          <h1 className="mb-5">Administra tu negocio con Vendetta como todo un PRO!</h1>
        </div>
        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
          <form>
            <div className="form-row">
              <div className="col-12 col-md-9 mb-2 mb-md-0">
                <input type="email" className="form-control form-control-lg" placeholder="Tu correo aquí..." />
              </div>
              <div className="col-12 col-md-3">
                <button type="submit" className="btn btn-block btn-lg btn-primary">Empezar!</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </header>

  <section className="features-icons bg-light text-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div className="features-icons-icon d-flex">
              <i className="icon-screen-desktop m-auto text-primary"></i>
            </div>
            <h3>Resposivo</h3>
            <p className="lead mb-0">Adaptado para la web moderna podras utilizar Vendetta en cualquier dispositivo!</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div className="features-icons-icon d-flex">
              <i className="icon-layers m-auto text-primary"></i>
            </div>
            <h3>Plugins</h3>
            <p className="lead mb-0">Aumenta la funcionalidad de Vendetta con poderosos plugins listos para ser integrados!</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="features-icons-item mx-auto mb-0 mb-lg-3">
            <div className="features-icons-icon d-flex">
              <i className="icon-check m-auto text-primary"></i>
            </div>
            <h3>Fácil de usar</h3>
            <p className="lead mb-0">Administrar un negocio nunca fue tan fácil Vendetta es ese sistema que estas buscando!</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="showcase">
    <div className="container-fluid p-0">
      <div className="row no-gutters">

        <div className="col-lg-6 order-lg-2 text-white showcase-img"></div>
        <div className="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2>Fully Responsive Design</h2>
          <p className="lead mb-0">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-lg-6 text-white showcase-img"></div>
        <div className="col-lg-6 my-auto showcase-text">
          <h2>Updated For Bootstrap 4</h2>
          <p className="lead mb-0">Newly improved, and full of great utility classes, Bootstrap 4 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 4!</p>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-lg-6 order-lg-2 text-white showcase-img"></div>
        <div className="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2>Easy to Use &amp; Customize</h2>
          <p className="lead mb-0">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
        </div>
      </div>
    </div>
  </section>

  <section className="testimonials text-center bg-light">
    <div className="container">
      <h2 className="mb-5">Lo que dice la gente de Vendetta...</h2>
      <div className="row">
        <div className="col-lg-4">
          <div className="testimonial-item mx-auto mb-5 mb-lg-0">
            <img className="img-fluid rounded-circle mb-3" src="img/testimonials-1.jpg" alt="" />
            <h5>Margaret E.</h5>
            <p className="font-weight-light mb-0">"Esto es fantastico! Muchas gracias chicos!"</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="testimonial-item mx-auto mb-5 mb-lg-0">
            <img className="img-fluid rounded-circle mb-3" src="img/testimonials-2.jpg" alt="" />
            <h5>Librandon V.</h5>
            <p className="font-weight-light mb-0">"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="testimonial-item mx-auto mb-5 mb-lg-0">
            <img className="img-fluid rounded-circle mb-3" src="img/testimonials-3.jpg" alt=""/>
            <h5>Sarah W.</h5>
            <p className="font-weight-light mb-0">"Thanks so much for making these free resources available to us!"</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="call-to-action text-white text-center">
    <div className="overlay"></div>
    <div className="container">
      <div className="row">
        <div className="col-xl-9 mx-auto">
          <h2 className="mb-4">Ready to get started? Sign up now!</h2>
        </div>
        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
          <form>
            <div className="form-row">
              <div className="col-12 col-md-9 mb-2 mb-md-0">
                <input type="email" className="form-control form-control-lg" placeholder="Enter your email..." />
              </div>
              <div className="col-12 col-md-3">
                <button type="submit" className="btn btn-block btn-lg btn-primary">Sign up!</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  </div>
    );
}

export default Landingpage;