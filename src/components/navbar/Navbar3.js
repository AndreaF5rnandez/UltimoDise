import React from "react";

const Navbar3 = () => {
  function cerrarsesion() {
    localStorage.removeItem("username");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("isProd");
  }

  return (
    <>
      <nav class="navbar  ">
        <div class="container-fluid">
          <a class="navbar-brand" href="8">
            Reciplas
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h3 class="offcanvas-title" id="offcanvasNavbarLabel">
                Area de Ventas
              </h3>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link" href="Proveedores">
                    prueba1
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="Clientes">
                    Clientes
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    <button onClick={cerrarsesion}> Cerrar Sesion</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar3;
