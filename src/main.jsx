import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import UserInfoContexttProvider from "./store/userContext";
import SidebarContextProvider from "./store/sidebarContext";
import PageLoadingContextProvider from "./store/PageLoadingContext";
import { NotificationProvider } from "./store/NotificationContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserInfoContexttProvider>
        <NotificationProvider>
          <PageLoadingContextProvider>
            <SidebarContextProvider>
              <App />
            </SidebarContextProvider>
          </PageLoadingContextProvider>
        </NotificationProvider>
      </UserInfoContexttProvider>
    </BrowserRouter>
  </React.StrictMode>
);
