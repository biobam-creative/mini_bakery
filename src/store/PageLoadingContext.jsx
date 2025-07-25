import React, { useState, createContext } from "react";

export const pageLoadingContext = createContext();

function PageLoadingContextProvider({ children }) {
  const [pageLoading, setPageLoading] = useState(false);

  return (
    <pageLoadingContext.Provider value={{ pageLoading, setPageLoading }}>
      {children}
    </pageLoadingContext.Provider>
  );
}

export default PageLoadingContextProvider;
