import "./styles-lista.css";

export const Imprimir = () => {
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="imprimir boton-foot"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Imprimir
      </button>
      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Solicitud de Impresión
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">¿Está seguro que desea imprimir?</div>
            <div class="modal-footer">
              <button
                className="cancelar__modal boton-foot"
                type="button"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button className="imprimir__modal boton-foot" type="button">
                Imprimir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
