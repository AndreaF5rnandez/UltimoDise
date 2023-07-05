import React from "react";
import {
    Button,
} from "reactstrap";
export const IngrosoMateriaP = () => {
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
                        backgroundColor: "white",
                    }}
                >
                    <div style={{
                        paddingLeft: "20px", color: "#9b9a9a", marginBottom: "0"
                    }}> <h2 style={{ marginBottom: "0" }} className="mb-2" > Ingreso de Materia Prima</h2>
                        <hr style={{
                            marginTop: "0",
                        }} /> </div>

                    <form className="formFlex" action="/registro" method="POST">
                        <div className="materiaP" > <h5 className="mb-2"> Datos de Materia Prima</h5>
                            <hr style={{
                                margin: "0px",
                            }} /> </div>
                        <div className="flexCuadros">

                            <div className="form-input">
                                <label for="inputState" className="form-label"></label>
                                <label for="inputGenero" className="form-label">
                                    Categoria
                                </label>
                                <select id="inputState" className="form-select imput">
                                    <option>...</option>
                                    <option selected>PET</option>
                                    <option selected>PEAD</option>
                                    <option selected>PVC</option>
                                    <option selected>PEBD</option>
                                    <option selected>PP</option>
                                    <option selected>PS</option>
                                    <option selected>Otros</option>
                                </select>
                            </div>
                        </div>
                        <div className="flexCuadros">
                            <div style={{ width: "25%" }} className="form-input">
                                <label for="Nombre" className="form-label"> Cantidad </label>
                                <input type="Nombre" className="form-control" id="Nombre" />
                            </div>

                            <div style={{ width: "25%" }} className="form-input">
                                <label for="Nombre" className="form-label"> Peso(kg)  </label>
                                <input type="Nombre" className="form-control" id="Nombre" />
                            </div>
                            <div style={{ width: "25%" }} className="form-input">
                                <label for="Nombre" className="form-label"> Presio($) </label>
                                <input type="Nombre" className="form-control" id="Nombre" />
                            </div>

                        </div>


                        <div className="form-descrp">
                            <label for="Nombre" className="form-label"> Descripcion </label>
                            <input type="Nombre" className="form-control" id="Nombre" style={{ width: "100%", height: "50px" }} />
                        </div>
                        <div style={{ margin: "50px 0px 30px 0px" }} className="materiaP" > <h5 className="mb-2"> Datos del Proveedor</h5>
                            <hr style={{
                                margin: "0px",
                            }} /> </div>
                        <div className="flexCuadros">
                            <div style={{ width: "25%" }} className="form-input">
                                <label for="inputState" className="form-label"></label>
                                <label for="inputGenero" className="form-label">
                                    Tipo de proveedor
                                </label>
                                <select id="inputState" className="form-select imput">
                                    <option>...</option>
                                    <option selected>Empresa</option>
                                    <option selected>particular</option>
                                </select>
                            </div>
                            <div style={{ width: "40%" }} className="form-input">
                                <label for="Nombre" className="form-label"> Nombre </label>
                                <input type="Nombre" className="form-control" id="Nombre" />
                            </div>
                        </div>
                        <div className="flexCuadros">
                            <div className="form-input">
                                <label for="Telef" className="form-label">
                                    Telefono
                                </label>
                                <input
                                    type="Number"
                                    className="form-control imput"
                                    id="Telef"
                                    placeholder="+54 "
                                />
                            </div>
                            <div className="form-input">
                                <label for="correo" className="form-label">
                                    Direccion de correo electronico
                                </label>
                                <input
                                    type="text"
                                    className="form-control imput"
                                    id="correo"
                                    placeholder="Nombre@ejemplo"
                                /></div> </div>
                        <div style={{ margin: "50px 0px 30px 0px" }} className="materiaP" > <h5 className="mb-2"> Datos del Recepcionista</h5>
                            <hr style={{
                                margin: "0px",
                            }} /> </div>
                        <div className="flexCuadros">
                            <div className="form-input">
                                <label for="Nombre" className="form-label"> Nombre y Apellido  </label>
                                <input type="Nombre" className="form-control" id="Nombre" />
                            </div>
                            <div className="form-input">
                                <label for="Nombre" className="form-label"> Peso </label>
                                <input type="Nombre" className="form-control" id="Nombre" />
                            </div>
                        </div>
                        <div style={{ marginLeft: "25px" }}>
                            <Button color="success">
                                Registrar Materia Prima
                            </Button>
                        </div>
                    </form>

                </div>
            </div>

        </>
    );
};

export default IngrosoMateriaP;
