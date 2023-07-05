import React from "react";
import "./produccion.css";
import imgReporMP from "./asset/img/reporteMP.jpeg";
import { FaFileDownload } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  ModalFooter,
} from "reactstrap";
import { materiaPrima } from "./arregloMP";

export class AdmListaMateriaPrima extends React.Component {
  state = {
    materia: materiaPrima,
    form: {
      id: "",
      Sector: "",
      Categoria: "",
      Cantidad: 0,
      Peso: 0,
      Fecha: "",
    },
    modalInsertar: false,
    modalEditar: false,
    modalFiltrar: false,
    modalReporte: false,
    modalINFO: false,
  };
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  mostartModalINFO = (registro) => {
    this.setState({ modalINFO: true, form: registro });
  };
  ocultarModalINFO = () => {
    this.setState({ modalINFO: false });
  };

  mostartModalReporte = () => {
    this.setState({ modalReporte: true });
  };
  ocultarModalReporte = () => {
    this.setState({ modalReporte: false });
  };
  mostrarModal = () => {
    this.setState({ modalInsertar: true });
  };
  ocultarModal = () => {
    this.setState({ modalInsertar: false });
  };
  mostrarModalFiltrar = () => {
    this.setState({ modalFiltrar: true });
  };
  ocultarModalFiltrar = () => {
    this.setState({ modalFiltrar: false });
  };
  mostrarModalEditar = (registro) => {
    this.setState({ modalEditar: true, form: registro });
  };
  ocultarModalEditar = () => {
    this.setState({ modalEditar: false });
  };
  insertar = () => {
    var valorNuevo = { ...this.state.form };
    valorNuevo.id = this.state.materia.length + 1;
    var lista = this.state.materia;
    lista.push(valorNuevo);
    this.setState({ materia: lista, modalInsertar: false });
  };
  editar = (dato) => {
    var contador = 0;
    var lista = this.state.materia;
    lista.map((registro) => {
      if (dato.id == registro.id) {
        lista[contador].Sector = dato.Sector;
        lista[contador].Categoria = dato.Categoria;
        lista[contador].Cantidad = dato.Cantidad;
        lista[contador].Peso = dato.Peso;
        lista[contador].Fecha = dato.Fecha;
      }
      contador++;
    });
    var opcion = window.confirm("Realmemte quiere editar el registro");
    this.setState({ data: lista, modalEditar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Realmemte quiere eliminar el registro");
    var contador = 0;
    var lista = this.state.materia;
    lista.map((registro) => {
      if (registro.id == dato.id) {
        lista.splice(contador, 1);
      }
      contador++;
    });
    this.setState({ materiaPrima: lista });
  };
  render() {
    return (
      <div className="flexpadre">
        <div className="flex">
          <div
            className="rounded-3  shadow "
            style={{
              width: "100%",
              height: "42rem",
              display: "grid",
              placeItems: "center",
              backgroundColor: "white",
              padding: "15px",
              margin: "0px 15px 0px 15px",
            }}
          >
            <Container
              style={{
                padding: "15px",
                height: "40rem",
              }}
            >
              <div className="filtros">
                <div
                  style={{
                    color: "#9b9a9a",
                    paddingLeft: "15px",
                  }}
                >
                  <h2>Materia Prima</h2>
                </div>

                <div className="procBotonos">
                  <div style={{ marginRight: "20px" }}>
                    <Button onClick={() => this.mostrarModalFiltrar()}>
                      <FaFilter />
                    </Button>
                  </div>
                  <div style={{ marginRight: "20px" }}>
                    <Button color="success">
                      <a class="my-link" href="RegMP">
                        New
                      </a>
                    </Button>
                  </div>
                  <div style={{ marginRight: "70px" }}>
                    <Button
                      color="success"
                      onClick={() => this.mostartModalReporte()}
                    >
                      Reportes{" "}
                    </Button>
                  </div>
                </div>
              </div>
              <hr
                style={{
                  marginTop: "0",
                }}
              />
              <div className="scroll-container">
                <Table style={{ height: "100%" }}>
                  <thead
                    style={{
                      color: "#ffffff",
                      background: "#cac6c6",
                    }}
                  >
                    <tr>
                      <th>ID</th>
                      <th>Sector</th>
                      <th>Categoria</th>
                      <th>Cantidad</th>
                      <th>Peso(kg)</th>
                      <th>Fecha de Ingreso</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.materia.map((elemento) => (
                      <tr>
                        <td>{elemento.id}</td>
                        <td>{elemento.Sector}</td>
                        <td>{elemento.Categoria}</td>
                        <td>{elemento.Cantidad}</td>
                        <td>{elemento.Peso}</td>
                        <td>{elemento.Fecha}</td>
                        <td>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            class="bi bi-journals"
                            viewBox="0 0 16 16"
                            type="button"
                            onClick={() => this.mostartModalINFO(elemento)}
                            data-bs-whatever="@getbootstrap"
                          >
                            <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" />
                            <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            class="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                            type="button"
                            onClick={() => this.mostrarModalEditar(elemento)}
                            data-bs-whatever="@getbootstrap"
                          >
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path
                              fill-rule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            class="bi bi-trash"
                            viewBox="0 0 16 16"
                            type="button"
                            onClick={() => this.eliminar(elemento)}
                            data-bs-whatever="@getbootstrap"
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                          </svg>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Container>
          </div>

          <Modal isOpen={this.state.modalINFO}>
            <ModalHeader>
              <div>
                <h3>Materia Prima</h3>
              </div>
            </ModalHeader>
            <ModalBody>
              <FormGroup>
                <label>id:</label>
                <input
                  value={this.state.form.id}
                  className="form-control"
                  readOnly
                  type="text"
                />
              </FormGroup>

              <FormGroup>
                <label>Sector:</label>
                <input
                  value={this.state.form.Sector}
                  onChange={this.handleChange}
                  className="form-control"
                  name="Sector"
                  type="text"
                  readOnly
                />
              </FormGroup>

              <FormGroup>
                <label>Categoria:</label>
                <input
                  value={this.state.form.Categoria}
                  onChange={this.handleChange}
                  className="form-control"
                  name="Categoria"
                  type="text"
                  readOnly
                />
              </FormGroup>

              <FormGroup>
                <label>Cantidad:</label>
                <input
                  value={this.state.form.Cantidad}
                  onChange={this.handleChange}
                  className="form-control"
                  name="Cantidad"
                  type="text"
                  readOnly
                />
              </FormGroup>

              <FormGroup>
                <label>Peso(kg):</label>
                <input
                  value={this.state.form.Peso}
                  className="form-control"
                  name="Peso"
                  type="text"
                  readOnly
                />
              </FormGroup>

              <FormGroup>
                <label>Fecha de ingreso:</label>
                <input
                  value={this.state.form.Fecha}
                  className="form-control"
                  name="Fecha-de-ingreso"
                  readOnly
                  type="text"
                />
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => this.ocultarModalINFO()}>Cancelar</Button>
            </ModalFooter>
          </Modal>

          <Modal isOpen={this.state.modalEditar}>
            <ModalHeader>
              <div>
                <h3>Editar Materia Prima</h3>
              </div>
            </ModalHeader>
            <ModalBody>
              <FormGroup>
                <label>id:</label>
                <input
                  value={this.state.form.id}
                  className="form-control"
                  type="text"
                />
              </FormGroup>

              <FormGroup>
                <label>Sector:</label>
                <input
                  value={this.state.form.Sector}
                  onChange={this.handleChange}
                  className="form-control"
                  name="Sector"
                  type="text"
                />
              </FormGroup>

              <FormGroup>
                <label>Categoria:</label>
                <input
                  value={this.state.form.Categoria}
                  onChange={this.handleChange}
                  className="form-control"
                  name="Categoria"
                  type="text"
                />
              </FormGroup>

              <FormGroup>
                <label>Cantidad:</label>
                <input
                  value={this.state.form.Cantidad}
                  onChange={this.handleChange}
                  className="form-control"
                  name="Cantidad"
                  type="text"
                />
              </FormGroup>

              <FormGroup>
                <label>Peso(kg):</label>
                <input
                  value={this.state.form.Peso}
                  className="form-control"
                  name="Peso"
                  type="text"
                />
              </FormGroup>

              <FormGroup>
                <label>Fecha de ingreso:</label>
                <input
                  value={this.state.form.Fecha}
                  className="form-control"
                  name="Fecha-de-ingreso"
                  type="text"
                />
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button
                onClick={() => this.editar(this.state.form)}
                color="success"
              >
                Editar
              </Button>
              <Button onClick={() => this.ocultarModalEditar()}>
                Cancelar
              </Button>
            </ModalFooter>
          </Modal>

          <Modal isOpen={this.state.modalFiltrar}>
            <ModalHeader>
              <div>
                <h3>Filter</h3>
              </div>
            </ModalHeader>
            <ModalBody>
              <div className="ID">
                <div class="dropdown">
                  <a
                    class="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categoria
                  </a>

                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        PET
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        PEAD
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        PVC{" "}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        PEBD
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        PP
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        PS
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        OTROS
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="ID">
                <div class="input-group mb-3">
                  <button
                    class="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    ID
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Separated link
                      </a>
                    </li>
                  </ul>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Text input with dropdown button"
                  />
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                onClick={() => this.mostrarModalFiltrar()}
                color="success"
              >
                Buscar
              </Button>
              <Button onClick={() => this.ocultarModalFiltrar()}>salir</Button>
            </ModalFooter>
          </Modal>

          <Modal size="lg" className="Modal" isOpen={this.state.modalReporte}>
            <ModalHeader>
              <div>
                <h3>Reportes de Materia prima</h3>
              </div>
            </ModalHeader>
            <ModalBody>
              <div
                className="imgReporte"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img
                  style={{
                    width: "100%",
                  }}
                  src={imgReporMP}
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                onClick={() => this.ocultarModalReporte()}
                color="success"
              >
                Imprimir
              </Button>
              <Button onClick={() => this.ocultarModalReporte()}>salir</Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default AdmListaMateriaPrima;
