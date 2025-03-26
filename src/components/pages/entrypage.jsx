import { useState, useContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Dashboard from "./dashboard";
import ComponentDisplay from "../ComponentDisplay";
import Login from "./Login";
import Airtime from "./Airtime";
import BuyData from "./BuyData";
import CableTV from "./CableTV";
import Electricity from "./Electricity";
import Exams from "./Exams";
import FundWallet from "./FundWallet";
import { userInfoContext } from "../../store/userContext";
import styled from "styled-components";
import { PageWrapper, ContentContainer } from "../styledComponents";
import ProtectedRoute from "../ProtectedRoute";
import SignUp from "./SignUp";
import Home from "./home";
import Header from "../ui/Header";
import TokenCheck from "./TokenCheck";
import Verification from "./Verification";
import PasswordReset from "./PasswordReset";
import SetNewPassword from "./SetNewPassword";

const EntryContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0;
  margin: 0;
  transition: margin-left 0.3s;
`;

function EntryPage({ expandSidebar }) {
  let location = useLocation();
  const accessToken = localStorage.getItem("access_token");
  let path = location.pathname;

  return (
    <EntryContainer expandSidebar={expandSidebar}>
      <ComponentDisplay
        path={path}
        component={<Header expandSidebar={expandSidebar} />}
      />
      <ContentContainer expandSidebar={expandSidebar}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/verification" element={<Verification />} />
          <Route
            path="/token-check/:uidb64/:token/:mailType"
            element={<TokenCheck />}
          />
          <Route
            path="/set-new-password/:uidb64/:token"
            element={<SetNewPassword />}
          />
          {/* <Route
            path="/password-reset-request-response"
            element={<PasswordResetRequestResponse />}
          /> */}
          <Route
            path="/data"
            element={
              <ProtectedRoute accessToken={accessToken}>
                <BuyData />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cabletv"
            element={
              <ProtectedRoute accessToken={accessToken}>
                <CableTV />
              </ProtectedRoute>
            }
          />
          <Route
            path="/fund-wallet"
            element={
              <ProtectedRoute accessToken={accessToken}>
                <FundWallet />
              </ProtectedRoute>
            }
          />
          {/* <Route
            path="/bills"
            element={
              <ProtectedRoute accessToken={accessToken}>
                <PayBills />
              </ProtectedRoute>
            }
          /> */}

          <Route
            path="/airtime"
            element={
              <ProtectedRoute accessToken={accessToken}>
                <Airtime />
              </ProtectedRoute>
            }
          />
          <Route
            path="/electricity"
            element={
              <ProtectedRoute accessToken={accessToken}>
                <Electricity />
              </ProtectedRoute>
            }
          />
          <Route
            path="/exams"
            element={
              <ProtectedRoute accessToken={accessToken}>
                <Exams />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute accessToken={accessToken}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute accessToken={accessToken}>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </ContentContainer>
    </EntryContainer>
  );
}

export default EntryPage;
