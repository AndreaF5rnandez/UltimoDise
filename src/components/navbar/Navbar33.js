import React from "react";
import "../../App.css";
import "./Navbar.css";
import { Button } from "reactstrap";
const logoImage = require("./logoR.png");
const hamburguesaMenu = require("./hamb.png");

export function Navbar33() {
  function cerrarsesion() {
    localStorage.removeItem("username");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("isProd");
  }

  return (
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
                  Materia Prima
                </h3>
                <nav class="nav nav-pills flex-column">
                  <a
                    style={{ color: "#9b9a9a" }}
                    class="nav-link ms-3 my-1"
                    href="ProduccionMP"
                  >
                    Lista de Materia Prima
                  </a>
                  <a
                    style={{ color: "#9b9a9a" }}
                    class="nav-link ms-3 my-1"
                    href="RegMP"
                  >
                    Ingresar Materia Prima
                  </a>
                </nav>
                <h3
                  style={{ color: "#9b9a9a" }}
                  class="nav-link"
                  href="#item-3"
                >
                  Productos
                </h3>
                <nav class="nav nav-pills flex-column">
                  <a
                    style={{ color: "#9b9a9a" }}
                    class="nav-link ms-3 my-1"
                    href="ProduccionProd"
                  >
                    Lista de Productos
                  </a>
                  <a
                    style={{ color: "#9b9a9a" }}
                    class="nav-link ms-3 my-1"
                    href="RegProd"
                  >
                    Ingresar Producto
                  </a>
                </nav>
                <h3
                  style={{ color: "#9b9a9a" }}
                  class="nav-link"
                  href="#item-3"
                >
                  Pedidos
                </h3>
                <nav class="nav nav-pills flex-column">
                  <a
                    style={{ color: "#9b9a9a" }}
                    class="nav-link ms-3 my-1"
                    href="ProdPedidos"
                  >
                    Lista de Pedidos
                  </a>
                </nav>
                <nav class="nav nav-pills flex-column">
                  <div style={{ margin: "20px" }}>
                    <Button onClick={cerrarsesion} color="success">
                      <a class="my-link" href="/">
                        Cerrar Sesion
                      </a>
                    </Button>
                  </div>
                </nav>
              </nav>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar33;
