import "./App.css";
import React, { useState } from "react";
import logo from "./assets/logo-hawk.png";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import CadastrarCandidato from "./routes/CadastrarCandidato";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container" id="divider">
          <div className="flex-row justify-content-center d-flex">
            <div className="col-2 ">
              <img src={logo} alt="Logo" />
            </div>
          </div>
        </div>

        {/* <div className="container g-2">
          <div className="d-flex justify-content-center p-2">
            <div>
				<Link to={'/cadastrar'}>
					<button className="btn-principal btn-success m-2" >
						<i style={{color: 'white'}} className="bi bi-search"></i> 
						Consultar
					</button>
				</Link>
			</div>
			<div>
        		<button className="btn-secundario btn-success m-2"><i style={{color: 'white'}} className="bi bi-person-add"></i> Cadastrar</button>
			</div>
          </div>
        </div> */}

        <nav className="navbar  navbar-dark bg-dark fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#">
              PRONTUÁRIO
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end text-bg-dark"
              tab-index="-1"
              id="offcanvasDarkNavbar"
              aria-labelledby="offcanvasDarkNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                  Menu
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Candidatos
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li>
                        <Link to="/cadastrar" className="dropdown-item">
                          Cadastrar novo
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Fazer consulta
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Cursos
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li>
                        <Link className="dropdown-item" to="/cadastrar-curso">
                          Cadastrar novo
                        </Link>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Fazer consulta
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <Outlet />
      </div>
      {/* <nav className="navbar sticky-bottom bg-dark mt-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>
        </div>
      </nav> */}
    </>
  );
};

export default App;
