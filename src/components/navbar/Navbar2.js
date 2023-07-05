import React from "react";
import "../../App.css";
import "./Navbar.css";
import { Button } from "reactstrap";
const logoImage = require("./logoR.png");
const hamburguesaMenu = require("./hamb.png");

export function Navbar2() {
  function cerrarsesion() {
    localStorage.removeItem("username");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("isProd");
  }

  return (
    <nav class="navbar sticky-top fixed-top gradient__bg">
      <div className="flexPadre" class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src={logoImage}
            alt="Logo"
            style={{ width: "100px", height: "auto" }}
          />
        </a>
        <div className="flesHIjo">
          <div>
            <Button>
              <a class="my-link" href="AdmHome">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-house-door"
                  viewBox="0 0 18 18"
                >
                  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
                </svg>
              </a>
            </Button>
          </div>
          <div>
            <Button onClick={cerrarsesion}>
              <a class="my-link" href="/">
                CERRAR SESION
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;
