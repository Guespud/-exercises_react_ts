import React from "react";

const NavigationBar: React.FC = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img width="40" src="https://i5.walmartimages.com/asr/bcc4085e-c311-4886-a7a4-aa58127883d7.5958f8a36f96aa4c08dbc4a8a580e57c.png" alt="icono de la pagina" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                Characters
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                Episode
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                Generator
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
