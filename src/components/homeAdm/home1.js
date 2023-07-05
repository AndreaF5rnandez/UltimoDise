import React from "react";
import "./home.css";

import imgReci from "./asset/img/reci3.png";
import { textDecoration } from "@chakra-ui/react";

export function HomeA() {
  return (
    <div className="body">
      <div className="flexpadre">
        <div className="flex">
          <div
            className="rounded-3  shadow "
            style={{
              width: "100%",
              height: "38rem",
              display: "grid",
              placeItems: "center",
              backgroundColor: "#ffffff",
              padding: "15px",
              margin: "30px 15px 25px 15px",
            }}
          >
            <div className="FlexPadre" style={{ background: "" }}>
              <div className="FlexHijo">
                <div
                  class="d-grid gap-2 d-md-block"
                  className="rounded-3  shadow "
                >
                  <button class="btn btn-success" type="button">
                    <a class="my-link" href="AdmVentas">
                      Ventas
                    </a>
                  </button>
                </div>
                <div
                  class="d-grid gap-2 d-md-block"
                  className="rounded-3  shadow "
                >
                  <button class="btn btn-success" type="button">
                    <a class="my-link" href="Compras">
                      Compras
                    </a>
                  </button>
                </div>
                <div
                  class="d-grid gap-2 d-md-block"
                  className="rounded-3  shadow "
                >
                  <button class="btn btn-success" type="button">
                    <a class="my-link" href="Deudores">
                      Deudores
                    </a>
                  </button>
                </div>
              </div>
              <div className="FlexHijo">
                <div
                  class="d-grid gap-2 d-md-block"
                  className="rounded-3  shadow "
                >
                  <button class="btn btn-success" type="button">
                    <a class="my-link" href="AdmUsuarios">
                      Usuarios
                    </a>
                  </button>
                </div>
                <div
                  class="d-grid gap-2 d-md-block"
                  className="rounded-3  shadow "
                >
                  <button class="btn btn-success" type="button">
                    <a class="my-link" href="AdmCli">
                      Clientes
                    </a>
                  </button>
                </div>

                <div
                  class="d-grid gap-2 d-md-block"
                  className="rounded-3  shadow "
                >
                  <button class="btn btn-success" type="button">
                    <a class="my-link" href="AdmProv">
                      Proveedores
                    </a>
                  </button>
                </div>
              </div>
              <div className="FlexHijo">
                <div
                  class="d-grid gap-2 d-md-block"
                  className="rounded-3  shadow "
                >
                  <button class="btn btn-success" type="button">
                    <a class="my-link" href="AdmMP">
                      Materia Prima
                    </a>
                  </button>
                </div>
                <div
                  class="d-grid gap-2 d-md-block"
                  className="rounded-3  shadow "
                >
                  <button class="btn btn-success" type="button">
                    <a class="my-link" href="AdmProductos">
                      Productos
                    </a>
                  </button>
                </div>
                <div
                  class="d-grid gap-2 d-md-block"
                  className="rounded-3  shadow "
                >
                  <button class="btn btn-success" type="button">
                    <a class="my-link" href="ProdPedidos">
                      Pedidos
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*<div className="flex">
                <div
                    className="rounded-3  shadow "
                    style={{
                        width: "100%",
                        height: "33rem",
                        display: "grid",
                        placeItems: "center",
                        backgroundColor: "#ffffff",
                        padding: "15px",
                        margin: "35px 15px 30px 15px"
                    }}>
                </div>
                <img src={imgReci} class="img-fluid" className='imgRecii'></img>
            </div> */
