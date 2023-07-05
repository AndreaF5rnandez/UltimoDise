import compras from "./compras";
import { BotonCheckBox } from "../botonCheckbox";
import "./styles.css";

const LineaCompras = () => {
  return (
    <tbody>
      {compras.map((usuario) => {
        return (
          <tr>
            <td className="centrado">
              <BotonCheckBox />
            </td>

            <td>{usuario.fecha_compra}</td>
            <td>{usuario.id_compra}</td>
            <td>{usuario.proveedor}</td>
            {/* 
            <td>{usuario.recepcionista}</td>
            <td>{usuario.cantidad}</td>
            <td>{usuario.descrip_compra}</td> 
            */}

            <td>{usuario.total}</td>

            <td>
              <button
                type="button"
                className="VerMas boton-foot "
                data-bs-toggle="modal"
                data-bs-target="#modalVerMas"
              >
                Ver Detalles
              </button>

              <div
                class="modal fade"
                id="modalVerMas"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div
                    class="modal-content"
                    className="modalContenedora__cuerpo"
                  >
                    {/* Cabecera*/}

                    <div class="modal-header" className="modalHeader">
                      <h4
                        class="modal-title"
                        id="exampleModalLabel"
                        className="enLinea"
                      >
                        Detalles de la Compra
                      </h4>
                      <button
                        type="button"
                        // class="btn-close"
                        className="botonCerrar"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        {/* X */}
                      </button>
                    </div>

                    {/* Cuerpo */}
                    <div class="modal-body">
                      <h4>Recepcionista</h4>
                      <tr></tr>
                      <span className="div-span__texto">
                        {usuario.recepcionista}
                      </span>
                    </div>

                    <div class="modal-body">
                      <h4>Articulo</h4>
                      <tr></tr>
                      <span className="div-span__texto">
                        {usuario.articulo}
                      </span>
                    </div>

                    <div class="modal-body">
                      <h4>Cantidad (Kg)</h4>
                      <tr></tr>
                      <span className="div-span__texto">
                        {usuario.cantidad}
                      </span>
                    </div>

                    <div class="modal-body">
                      <h4>Descripcion</h4>
                      <tr></tr>
                      <span className="div-span__texto">
                        <i>{usuario.descrip_compra}</i>
                      </span>
                    </div>

                    <div class="modal-body">
                      <h4>Total (Kg)</h4>
                      <tr></tr>
                      <span className="div-span__texto">
                        {usuario.total_kg}
                      </span>
                    </div>

                    {/* Footer */}
                    <div class="modal-footer" className="modalFooter">
                      <button
                        className="boton-pie"
                        type="button"
                        // class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default LineaCompras;
