import React from "react";
import "./ingreseC.css"
import {
  Button,
} from "reactstrap";
const Empleado = () => {
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
            width: "50%",
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
                            <div style={{ width: "60%" }} className="form-input">
                                <label for="Nombre" className="form-label"> Nombre </label>
                                <input type="Nombre" className="form-control" id="Nombre" />
                            </div>

                            <div style={{ width: "60%" }} className="form-input">
                                <label for="Apellido" className="form-label"> Apellido  </label>
                                <input type="Apellido" className="form-control" id="Apellido" />
                            </div>
              </div>
              <div className="flexhijo">
                            <div style={{ width: "60%" }} className="form-input">
                                <label for="DNI" className="form-label"> DNI </label>
                                <input type="Number" className="form-control" id="DNI" />
                            </div>

                            <div style={{ width: "60%" }} className="form-input">
                                <label for="Telefono" className="form-label"> Telefono  </label>
                                <input type="Number" className="form-control" id="Telefono" placeholder="+54 " />
                            </div>
              </div>
              <div className="flexhijo">
                            <div style={{ width: "60%" }} className="form-input">
                                <label for="Fnacim" className="form-label"> Fecha de nacimiento </label>
                                <input type="date" className="form-control" id="Fnacim" />
                            </div>
                            <div style={{ width: "65%" }} className="form-input">
                                <label for="Genero" className="form-label"></label>
                                <label for="Genero" className="form-label">
                                Genero
                                </label>
                                <select id="Genero" className="form-select imput">
                                   <option selected>...</option>
                                   <option selected>Femenino</option>
                                   <option selected>Masculino</option>
                                   <option selected>Prefiero no decirlo</option>
                                </select>
                            </div>
              </div>
              <div className="flexhijo">
                   
                    <div style={{ width: "65%" }} className="form-input">
                                <label for="Provincia" className="form-label"></label>
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
                    </div>   
                    <div style={{ width: "40%" }} className="form-input">
                                <label for="codigo" className="form-label"> Codigo Postal  </label>
                                <input type="Number" className="form-control" id="codigo" />
                            </div>      
              </div>
            
              <div style={{ width: "92%" }} className="form-input">
                    <label for="correo" className="form-label">Correo</label>
                    <input type="text" className="form-control" id="correo" placeholder="Nombre@ejemplo" />
              </div>
              <div style={{ width: "92%" }} className="form-input">
                    <label for="ConfCorreo" className="form-label">Correo</label>
                    <input type="text" className="form-control" id="ConfCorreo" placeholder="Nombre@ejemplo" />
              </div>
              <br />
              <div style={{marginLeft:"25px"}}>
                <Button color="success">
                Registrar Cliente  
                </Button>
             </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Empleado;
