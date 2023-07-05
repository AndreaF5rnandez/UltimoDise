import React from "react";

const RegCliente = () => {
  return (
    <>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          backgroundColor: "#f2f2f2",
          paddingTop: "4rem",
          paddingBottom: "12rem",
        }}
      >
        <div
          className="rounded-3 py-5 shadow "
          style={{
            width: "60%",
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
            <h2 className="mb-4">Registrar nuevo Cliente</h2>
            <form className="">
              <div className="flexhijo">
                <label for="Nombre" className="form-label">
                  Nomdfgsdbre
                </label>
                <input type="Nombre" className="form-control imput" id="Nombre" />
                <br />
                <label for="Apellido" className="form-label">
                  Apellido
                </label>
                <input
                  type="Apellido"
                  className="form-control imput"
                  id="Apellido"
                />
              </div>
              <br />
              <label for="DNI" className="form-label">
                DNI
              </label>
              <input type="Number" className="form-control imput" id="DNI" />
              <br />
              <label for="Telef" className="form-label">
                Telefono
              </label>
              <input
                type="Number"
                className="form-control imput"
                id="Telef"
                placeholder="+54 "
              />
              <br />
              <label for="Fnacim" className="form-label">
                Fecha de nacimiento
              </label>
              <input type="date" className="form-control imput" id="Fnacim" />
              <br />
              <label for="Provincia" className="form-label">
                Provincia
              </label>
              <select id="Provincia" className="form-select imput">
                <option selected>...</option>
                <option>Chaco</option>
                <option>Catamarca</option>
                <option>Chubut</option>
                <option>Buenos Aires</option>
                <option>Córdoba</option>
                <option>Corrientes</option>
                <option>Entre Rios</option>
                <option>Formosa</option>
                <option>Jujuy</option>
                <option>La Pampa </option>
                <option>La Rioja</option>
                <option>Mendoza</option>
                <option>Misiones</option>
                <option>Neuquén</option>
                <option>Salta</option>
                <option>Río Negro</option>
                <option>San Juan</option>
                <option>San Luis</option>
                <option>Santa Cruz</option>
                <option>Santa Fe</option>
                <option>Santiago del Estero</option>
                <option>Tucumán</option>
                <option>Tierra del Fuego</option>
              </select>
              {/*<input type="text" className="form-control imput" id="PyC" />*/}
              <br />
              <label for="correo" className="form-label">
                Direccion de correo electronico
              </label>
              <input
                type="text"
                className="form-control imput"
                id="correo"
                placeholder="Nombre@ejemplo"
              />
              <br />
              <label for="ConfCorreo" className="form-label">
                Confirmar correo electronico
              </label>
              <input
                type="text"
                className="form-control imput"
                id="ConfCorreo"
                placeholder="Nombre@ejemplo"
              />
              <br />
              <label for="inputState" className="form-label"></label>
              <label for="inputGenero" className="form-label">
                Genero
              </label>
              <select id="inputState" className="form-select imput">
                <option>...</option>
                <option selected>Femenino</option>
                <option selected>Masculino</option>
                <option selected>Prefiero no decirlo</option>
              </select>
              <br />
              <label for="Usuario" className="form-label">
                Usuario
              </label>
              <input type="text" className="form-control imput" id="Usuario" />

              <br />
              <br />
              <button type="submit" className="btn btn-primary imput">
                Registrar Cliente
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegCliente;
