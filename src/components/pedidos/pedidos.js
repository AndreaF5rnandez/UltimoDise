import React from "react";
import "./pro.css";
import imgReporMP from "./asset/img/pedidos.jpeg";
import { FaFileDownload } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaRecycle } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { FaShapes } from "react-icons/fa";
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
import { materiaPrima } from "./arregloPedido";

export class ListaPedidos extends React.Component {
  state = {
    materia: materiaPrima,
    form: {
      NroPedido: 1,
      Fecha: "",
      Cliente: "",
      Producto: "",
      Cantidad: "",
      Estado: "",
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
        lista[contador].NroPedido = dato.NroPedido;
        lista[contador].Cliente = dato.Cliente;
        lista[contador].Producto = dato.Producto;
        lista[contador].Cantidad = dato.Cantidad;
        lista[contador].Estado = dato.Estado;
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
              height: "40rem",
              display: "grid",
              placeItems: "center",
              backgroundColor: "white",
              padding: "15px",
              margin: "0px 15px 32px 15px",
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
                  <h2>Pedidos</h2>
                </div>

                <div className="procBotonos">
                  <div style={{ marginRight: "20px" }}>
                    <Button onClick={() => this.mostrarModalFiltrar()}>
                      <FaFilter />
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
              <div className="scroll-container" style={{ height: "100%" }}>
                <Table style={{ height: "100%" }}>
                  <thead
                    style={{
                      color: "#ffffff",
                      background: "#cac6c6",
                    }}
                  >
                    <tr>
                      <th>NroPedido</th>
                      <th>Fecha</th>
                      <th>Cliente</th>
                      <th>Producto</th>
                      <th>Cantidad</th>
                      <th>Estado</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.materia.map((elemento) => (
                      <tr>
                        <td>{elemento.NroPedido}</td>
                        <td>{elemento.Fecha}</td>
                        <td>{elemento.Cliente}</td>
                        <td>{elemento.Producto}</td>
                        <td>{elemento.Cantidad}</td>
                        <td>{elemento.Estado}</td>
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
                <label>NroPedido:</label>
                <input
                  value={this.state.form.NroPedido}
                  className="form-control"
                  readOnly
                  type="text"
                />
              </FormGroup>

              <FormGroup>
                <label>Fecha:</label>
                <input
                  value={this.state.form.Fecha}
                  onChange={this.handleChange}
                  className="form-control"
                  name="Fecha"
                  type="text"
                  readOnly
                />
              </FormGroup>

              <FormGroup>
                <label>Cliente:</label>
                <input
                  value={this.state.form.Cliente}
                  onChange={this.handleChange}
                  className="form-control"
                  name="Cliente"
                  type="text"
                  readOnly
                />
              </FormGroup>

              <FormGroup>
                <label>Producto:</label>
                <input
                  value={this.state.form.Producto}
                  onChange={this.handleChange}
                  className="form-control"
                  name="Producto"
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
                <label for="inputState" className="form-label"></label>
                <label for="inputGenero" className="form-label">
                  Estado:
                </label>
                <select
                  value={this.state.form.Estado}
                  id="inputState"
                  className="form-select imput"
                  name="Estado"
                >
                  <option>...</option>
                  <option selected>Fabricacion</option>
                  <option selected>Listo para entregar</option>
                </select>
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
                <label>NroPedido:</label>
                <input
                  value={this.state.form.NroPedido}
                  className="form-control"
                  type="text"
                />
              </FormGroup>

              <FormGroup>
                <label>Fecha:</label>
                <input
                  value={this.state.form.Fecha}
                  onChange={this.handleChange}
                  className="form-control"
                  name="Fecha"
                  type="text"
                />
              </FormGroup>

              <FormGroup>
                <label>Cliente:</label>
                <input
                  value={this.state.form.Cliente}
                  onChange={this.handleChange}
                  className="form-control"
                  name="Cliente"
                  type="text"
                />
              </FormGroup>

              <FormGroup>
                <label>Producto:</label>
                <input
                  value={this.state.form.Producto}
                  onChange={this.handleChange}
                  className="form-control"
                  name="Producto"
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
                <label for="inputState" className="form-label"></label>
                <label for="inputGenero" className="form-label">
                  Estado:
                </label>
                <select
                  value={this.state.form.Estado}
                  id="inputState"
                  className="form-select imput"
                  name="Estado"
                >
                  <option>...</option>
                  <option selected>Fabricacion</option>
                  <option selected>Listo para entregar</option>
                </select>
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
                <a
                  class="btn btn-secondary "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  NroPedido
                </a>
                <input
                  style={{ width: "60%" }}
                  type="text"
                  class="form-control"
                  aria-label="Text input with dropdown button"
                />
              </div>
              <div className="ID">
                <button class="btn btn-outline-secondary " type="button">
                  Fecha
                </button>
                <input
                  style={{ width: "150%" }}
                  type="date"
                  class="form-control"
                  aria-label="Text input with dropdown button"
                />
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
                <h3>Reportes de Pedidos</h3>
              </div>
            </ModalHeader>
            <ModalBody>
              <img src={imgReporMP} />
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

export default ListaPedidos;
