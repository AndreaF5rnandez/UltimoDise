import React from "react";
import "./styles-lista.css";

const ModalVerMas = () => {
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="VerMas boton-foot "
        data-bs-toggle="modal"
        data-bs-target="#modalVerMas"
      >
        Ver Detalles
      </button>







      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="modalVerMas"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          
          
          <div class="modal-content">
          
          
            {/* Cabecera*/}
          
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Detalles de la Compra
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>



            {/* Cuerpo */}
            <div class="modal-body">
    
                <h3>Recepcionista</h3>                
                <tr></tr>
            </div>
           
           
           
           {/* Footer */}
            <div class="modal-footer">
              <button
              className="cerrar__modal"
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>

            </div>


          </div>



        </div>
      </div>
    </>
  );
};

export default ModalVerMas;
