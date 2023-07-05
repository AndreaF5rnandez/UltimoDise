import React, { createContext, useState } from "react";

export const Context = createContext({});

export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isProd, setIsProd] = useState(false);
  const [isVentas, setIsVentas] = useState(false);

  return (
    <Context.Provider
      value={{
        isAdmin,
        setIsAdmin,
        isProd,
        setIsProd,
        isVentas,
        setIsVentas,
      }}
    >
      {children}
    </Context.Provider>
  );
};
