import { useState } from "react";
import "./App.css";

import UserInfoContexttProvider from "./store/userContext";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/home";
import Login from "./components/pages/login/Login";
import EntryPage from "./components/pages/entryPage/entrypage";

function App() {
  return (
    <>
      <UserInfoContexttProvider>
        <div>
          <Routes>
            <Route path="/portal" element={<EntryPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </UserInfoContexttProvider>
    </>
  );
}

export default App;
