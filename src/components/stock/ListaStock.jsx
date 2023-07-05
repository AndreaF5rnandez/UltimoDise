import React from "react";
import { Imprimir } from "../modalBoton";

import "../styles-lista.css";

import LineaStock from "./LineaStock";

const ListaStock = () => {
  return (
    <>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          backgroundColor: "#f2f2f2",
          paddingTop: "2rem",
          paddingBottom: "6rem",
        }}
      >
        <div
          className="rounded-3 shadow "
          style={{
            width: "70rem",
            height: "40rem",
            display: "grid",
            placeItems: "center",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              display: "grid",
              placeItems: "center",
            }}
          >
            {/* Scroll de la grilla */}
            <div
              className="rounded-3 py-5 shadow "
              class="overflow-auto"
              style={{
                width: "67rem",
                height: "35rem",
                display: "grid",
                placeItems: "center",
                backgroundColor: "white",
              }}
            >
              <table
                class="table caption-top table-hover "
                style={{ width: "60rem", placeItems: "center" }}
              >
                <caption class="mb-3">
                  <h2>Stock</h2>
                </caption>
                <thead class="table-light " className="pegado">
                  <tr>
                    <th scope="col" style={{ width: "6rem" }} class="ml-2">
                      <h5>
                        <b>#</b>
                      </h5>
                    </th>

                    <th scope="col" style={{ width: "6rem" }} class="ml-2">
                      {" "}
                      Id
                    </th>
                    {/* Los inputs con icono */}
                    <th scope="col" style={{ width: "6rem" }} class="ml-2">
                      Cantidad
                    </th>
                    <th scope="col" style={{ width: "9rem" }} class="ml-2">
                      Cantidad Minima
                    </th>
                    <th
                      className="centrado"
                      scope="col"
                      style={{ width: "6rem" }}
                      class="ml-2"
                    >
                      Tipo
                    </th>
                    <th
                      className="centrado"
                      scope="col"
                      style={{ width: "12rem" }}
                      class="ml-2"
                    >
                      Descripcion
                    </th>
                  </tr>
                </thead>
                <LineaStock />
              </table>
            </div>

            <Imprimir />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListaStock;
