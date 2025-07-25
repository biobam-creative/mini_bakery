import React, { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

export const pathContext = createContext();

function PathContextProvider({ children }) {
  const location = useLocation();
  const path = location.pathname;
  //   console.log(path);

  return (
    <pathContext.Provider value={{ path }}>{children}</pathContext.Provider>
  );
}

export default PathContextProvider;
