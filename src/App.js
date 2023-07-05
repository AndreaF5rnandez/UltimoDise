import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Layout from "./components/Layout";
import { AdminProvider } from "./Context";

import {
  Clientes,
  Empleado,
  Recuadro,
  Search,
  ListaClientes,
  ListaProveedores,
  Modale,
  Login,
  Login1,
  Navbar,
  Navbar1,
  Navbar2,
} from "./components";

import {
  VentasClientes,
  VentasProv,
  RegistrarCliente,
  RegistrarProveedor,
  LoginHome,
  ProduccionMP,
  ProduccionProducto,
  RegistrarMP,
  RegistrarProd,
  AdminDeudores,
  AdminStock,
  AdminCompras,
  AdminListProv,
  AdminListCli,
  AdminHome,
  AdminVentas,
  AdminListUsuarios,
  ProduccionPedidos,
  AdminRegUsuario,
  AdmMateriaPrima,
  AdminProductos,
} from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <AdminProvider>
        <Layout>
          <Routes>
            <Route element={<LoginHome />} path="/" />
            <Route element={<VentasClientes />} path="Clientes" />
            <Route element={<VentasProv />} path="Proveedores" />
            <Route element={<RegistrarCliente />} path="RegCliente" />
            <Route element={<RegistrarProveedor />} path="RegProv" />
            <Route element={<RegistrarMP />} path="RegMP" />
            <Route element={<RegistrarProd />} path="RegProd" />
            <Route element={<ProduccionMP />} path="ProduccionMP" />
            <Route element={<ProduccionProducto />} path="ProduccionProd" />
            <Route element={<AdminDeudores />} path="Deudores" />
            <Route element={<AdminStock />} path="Stock" />
            <Route element={<AdminCompras />} path="Compras" />
            <Route element={<AdminListProv />} path="AdmProv" />
            <Route element={<AdminListCli />} path="AdmCli" />
            <Route element={<AdminHome />} path="AdmHome" />
            <Route element={<AdminVentas />} path="AdmVentas" />
            <Route element={<AdminListUsuarios />} path="AdmUsuarios" />
            <Route element={<ProduccionPedidos />} path="ProdPedidos" />
            <Route element={<AdminRegUsuario />} path="AdmRegUsuario" />
            <Route element={<AdmMateriaPrima />} path="AdmMP" />
            <Route element={<AdminProductos />} path="AdmProductos" />
          </Routes>
        </Layout>
      </AdminProvider>
    </BrowserRouter>
  );
};

export default App;
