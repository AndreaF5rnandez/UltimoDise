import React from "react";
import {
    Button,
} from "reactstrap";
export const IngrosoProducto = () => {
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
                    }}> <h2 style={{ marginBottom: "0" }} className="mb-2" > Ingrese el Producto</h2>
                        <hr style={{
                            marginTop: "0",
                        }} /> </div>

                    <form className="formFlex" action="/registro" method="POST">
                        <div className="materiaP" > <h5 className="mb-2"> Datos del Producto</h5>
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
                                <label for="Nombre" className="form-label"> Nombre </label>
                                <input type="Nombre" className="form-control" id="Nombre" />
                            </div>

                            <div style={{ width: "25%" }} className="form-input">
                                <label for="Nombre" className="form-label"> Cantidad  </label>
                                <input type="Nombre" className="form-control" id="Nombre" />
                            </div>
                            <div style={{ width: "25%" }} className="form-input">
                                <label for="Nombre" className="form-label"> Precio(uni) </label>
                                <input type="Nombre" className="form-control" id="Nombre" />
                            </div>
                        </div>

                        <div className="flexCuadros">
                            <div style={{ width: "25%" }} className="form-input">
                                <label for="inputState" className="form-label"></label>
                                <label for="inputGenero" className="form-label">
                                    Estado
                                </label>
                                <select id="inputState" className="form-select imput">
                                    <option>...</option>
                                    <option selected>Finalizado</option>
                                    <option selected>En Proceso</option>
                                </select>
                            </div>
                            <div style={{ width: "20%" }} className="form-input">
                                <label for="Fnacim" className="form-label">
                                    Fecha de Inicio
                                </label>
                                <input style={{ color: "#747272" }} type="date" className="form-control imput" id="Fnacim" />
                            </div>
                            <div style={{ width: "20%" }} className="form-input">
                                <label for="Fnacim" className="form-label">
                                    Fecha de Fin
                                </label>
                                <input style={{ color: "#747272" }} type="date" className="form-control imput" id="Fnacim" />
                            </div>
                        </div>
                        <div className="form-descrp">
                            <label for="Nombre" className="form-label"> Descripcion </label>
                            <input type="Nombre" className="form-control" id="Nombre" style={{ width: "100%", height: "50px" }} />
                        </div>

                        <div style={{ margin: "50px 0px 30px 0px" }} className="materiaP" > <h5 className="mb-2"> Datos del Recepcionista</h5>
                            <hr style={{
                                margin: "0px",
                            }} /> </div>
                        <div className="flexCuadros">
                            <div className="form-input">
                                <label for="Nombre" className="form-label"> Nombre   </label>
                                <input type="Nombre" className="form-control" id="Nombre" />
                            </div>
                            <div className="form-input">
                                <label for="Nombre" className="form-label"> Apellido </label>
                                <input type="Nombre" className="form-control" id="Nombre" />
                            </div>
                        </div>
                        <div style={{ marginLeft: "25px" }}>
                            <Button color="success">
                                Registrar Producto
                            </Button>
                        </div>
                    </form>

                </div>
            </div>

        </>
    );
};

export default IngrosoProducto;
