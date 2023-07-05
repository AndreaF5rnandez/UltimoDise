import React from "react";
import "../../App.css";
import "./Navbar.css";
const logoImage = require("./logoR.png");
const hamburguesaMenu = require("./hamb.png");

const Navbar1 = () => {
  function cerrarsesion() {
    localStorage.removeItem("username");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("isProd");
  }

  return (
    <>
      <nav class="navbar sticky-top fixed-top gradient__bg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src={logoImage}
              alt="Logo"
              style={{ width: "100px", height: "auto" }}
            />
          </a>
          <button
            className="hamb__button"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <img src={hamburguesaMenu} className="hamb__icon"></img>
          </button>

          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="row">
              <nav id="navbar-example3">
                <nav class="nav nav-pills flex-column">
                  <h3
                    style={{ color: "#9b9a9a" }}
                    class="nav-link"
                    href="#item-1"
                  >
                    Proveedores
                  </h3>
                  <nav class="nav nav-pills flex-column">
                    <a
                      style={{ color: "#9b9a9a" }}
                      class="nav-link ms-3 my-1"
                      href="Proveedores"
                    >
                      Lista de Proveedores
                    </a>
                    <a
                      style={{ color: "#9b9a9a" }}
                      class="nav-link ms-3 my-1"
                      href="RegProv"
                    >
                      Registrar nuevo Proveedor
                    </a>
                  </nav>
                  <h3
                    style={{ color: "#9b9a9a" }}
                    class="nav-link"
                    href="#item-3"
                  >
                    Clientes
                  </h3>
                  <nav class="nav nav-pills flex-column">
                    <a
                      style={{ color: "#9b9a9a" }}
                      class="nav-link ms-3 my-1"
                      href="Clientes"
                    >
                      Lista de Clientes
                    </a>
                    <a
                      style={{ color: "#9b9a9a" }}
                      class="nav-link ms-3 my-1"
                      href="RegCliente"
                    >
                      Registrar nuevo Cliente
                    </a>
                    <button
                      type="submit"
                      class="btn btn-success btn-block mb-4"
                      onClick={cerrarsesion}
                    >
                      <a
                        style={{ color: "#9b9a9a" }}
                        class="nav-link ms-3 my-1"
                        href="/"
                      >
                        cerrarsesion
                      </a>
                    </button>
                  </nav>
                </nav>
              </nav>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar1;
