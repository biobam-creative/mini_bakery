import React, { createContext, useState } from "react";

export const sidebarContext = createContext();

function SidebarContextProvider({ children }) {
  const [expandSidebar, setExpandSidebar] = useState(true);
  const [selectedNav, setSelectedNav] = useState("Dashboard");

  return (
    <sidebarContext.Provider
      value={{ expandSidebar, setExpandSidebar, selectedNav, setSelectedNav }}
    >
      {children}
    </sidebarContext.Provider>
  );
}

export default SidebarContextProvider;
