import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import UserInfoContexttProvider from "./store/userContext";
import SidebarContextProvider from "./store/sidebarContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserInfoContexttProvider>
        <SidebarContextProvider>
          <App />
        </SidebarContextProvider>
      </UserInfoContexttProvider>
    </BrowserRouter>
  </React.StrictMode>
);
