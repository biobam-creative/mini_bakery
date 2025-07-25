import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import UserInfoContexttProvider from "./store/userContext";
import SidebarContextProvider from "./store/sidebarContext";
import PageLoadingContextProvider from "./store/PageLoadingContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserInfoContexttProvider>
        <PageLoadingContextProvider>
          <SidebarContextProvider>
            <App />
          </SidebarContextProvider>
        </PageLoadingContextProvider>
      </UserInfoContexttProvider>
    </BrowserRouter>
  </React.StrictMode>
);
