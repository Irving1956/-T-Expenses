import React, { Component } from 'react'
// import imagen1 from './../images/demo-screen-1.jpg';
import imagen2 from './../images/iphone_6_plus_white_port.png';

const Home = () => (
    
        <div>
          <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container">
              <a className="navbar-brand js-scroll-trigger" href="#page-top">&amp;T - Expenses</a>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars" />
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#download">Download</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#features">Features</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <header className="masthead">
            <div className="container h-100">
              <div className="row h-100">
                <div className="col-lg-7 my-auto">
                  <div className="header-content mx-auto">
                    <h1 className="mb-5">Descubre en qué gastas con <br />&amp;T-Expenses</h1>
                    <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Registra tus gastos</a>
                  </div>
                </div>
                <div className="col-lg-5 my-auto">
                  <div className="device-container">
                    <div className="device-mockup iphone6_plus portrait white">
                      <div className="device">
                        <div className="screen">
                          {/* Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! */}
                          <img width="200" src={imagen2} alt="dsada" className="img-fluid"/>
                        </div>
                        <div className="button">
                          {/* You can hook the "home button" to some JavaScript events or just remove it */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <footer>
            <div className="container">
              <p>&amp;T - Expenses</p>
            </div>
          </footer>
          {/* Bootstrap core JavaScript */}
          {/* Plugin JavaScript */}
          {/* Custom scripts for this template */}
        </div>
     );

  export default Home;