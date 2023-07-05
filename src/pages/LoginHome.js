//import { Login1 } from "../components/index";
import React, { useEffect } from "react";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context";

const normalCredentials = {
  firstName: "test",
  password: "test",
  isAdmin: false,
};

const produccionCredentials = {
  firstName: "prod",
  password: "prod",
  isPord: false,
};

const ventasCredentials = {
  firstName: "ventas",
  password: "ventas",
  isVenta: false,
};

const comprasCredentials = {
  firstName: "compras",
  password: "compras",
  isVenta: false,
};

function validateCredentials(credentials) {
  return (
    (credentials[0].value === normalCredentials.firstName ||
      credentials[0].value === produccionCredentials.firstName ||
      /* */ credentials[0].value === comprasCredentials.firstName ||
      credentials[0].value === ventasCredentials.firstName) &&
    (credentials[1].value === produccionCredentials.password ||
      credentials[1].value === normalCredentials.password ||
      /* */ credentials[1].value === comprasCredentials.password ||
      credentials[1].value === ventasCredentials.password)
  );
}

const LoginHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      navigate("Proveedores");
    }
  }, []);

  const adminContext = useContext(Context);

  const handleSubmit = (e, values) => {
    e.preventDefault();
    if (validateCredentials(e.target)) {
      localStorage.setItem("username", e.target[0].value);
      localStorage.setItem("isAdmin", JSON.stringify(true));
      adminContext?.setIsAdmin(true);
      //navigate("Clientes");
    }
    //raro
    if (validateCredentials(e.target)) {
      localStorage.setItem("username", e.target[0].value);
      localStorage.setItem("isProd", JSON.stringify(true));
      adminContext?.setIsProd(true);
      //navigate("ProduccionMP");
    }
    if (validateCredentials(e.target)) {
      localStorage.setItem("username", e.target[0].value);
      localStorage.setItem("isVentas", JSON.stringify(true));
      adminContext?.setIsVentas(true);
      //navigate("Proveedores");
    }

    const usuario = e.target[0].value;
    //const Produccion = JSON.parse(localStorage.getItem("prod"));
    //const Ventas = JSON.parse(localStorage.getItem("ventas"));

    if (usuario === "test") {
      navigate("AdmHome");
    } else if (usuario === "prod") {
      navigate("ProduccionMP");
    } else if (usuario === "ventas") {
      navigate("Clientes");
    } else if (usuario === "compras") {
      navigate("AdmMP");
    }
  };

  return (
    <>
      <section class="text-center text-lg-start">
        <div class="container py-0">
          <div class="row g-0 align-items-center">
            <div class="col-lg-6 mb-5 mb-lg-0">
              <div class="card cascading-right cardbg ">
                <div class="card-body p-5 shadow-5 text-center">
                  <h2 class="fw-bold mb-5">Iniciar Sesion</h2>
                  <form onSubmit={handleSubmit}>
                    <div style={{ width: "100%" }} >

                      <div class="form-outline">
                        <input
                          type="text"
                          id="form3Example1"
                          class="form-control"
                        />
                        <label class="form-label" for="form3Example1">
                          Usuario
                        </label>

                      </div>
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4"
                        class="form-control"
                      />
                      <label class="form-label" for="form3Example4">
                        Contraseña
                      </label>
                    </div>

                    <button
                      type="submit"
                      class="btn btn-success btn-block mb-4"
                    >
                      Ingresar
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div class="col-lg-5 mb-2 mt-0 mb-lg-0">
              <img
                src="https://png.pngtree.com/background/20210710/original/pngtree-garbage-classification-recycling-picture-image_1039212.jpg"
                class="w-100 rounded-4 shadow-4"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginHome;
