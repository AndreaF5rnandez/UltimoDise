import React, { useContext, useEffect } from "react";
import { Context } from "../Context";
import Navbar1 from "./navbar/Navbar1";
import Navbar2 from "./navbar/Navbar2";
import Navbar3 from "./navbar/Navbar3";
import Navbar4 from "./navbar/Navbar4";
import Navbar5 from "./navbar/Navbar5";
import Navbar33 from "./navbar/Navbar33";

const Layout = ({ children }) => {
  const adminContext = useContext(Context);

  useEffect(() => {
    const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
    const isProd = JSON.parse(localStorage.getItem("isProd"));
    const isVentas = JSON.parse(localStorage.getItem("isVentas"));

    if (isAdmin) adminContext.setIsAdmin(true);
    if (isProd) adminContext.setIsAdmin(true);
    if (isVentas) adminContext.setIsAdmin(true);
  }, []);

  const username = localStorage.getItem("username");

  return (
    <div>
      {username === "prod" ? <Navbar33 /> : null}
      {username === "ventas" ? <Navbar4 /> : null}
      {username === "test" ? <Navbar2 /> : null}
      {username === "compras" ? <Navbar5 /> : null}

      {children}
    </div>
  );
};

export default Layout;
