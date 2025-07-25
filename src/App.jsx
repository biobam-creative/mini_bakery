import { useState, useContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Dashboard from "./components/pages/dashboard";
// import ComponentDisplay from "../ComponentDisplay";
import ComponentGroup from "./components/pages/ComponentGroup";
import Login from "./components/pages/Login";
import Airtime from "./components/pages/Airtime";
import BuyData from "./components/pages/BuyData";
import CableTV from "./components/pages/CableTV";
import Electricity from "./components/pages/Electricity";
import Exams from "./components/pages/Exams";
import FundWallet from "./components/pages/FundWallet";
import { userInfoContext } from "./store/userContext";
import { sidebarContext } from "./store/sidebarContext";
import { pageLoadingContext } from "./store/PageLoadingContext";
import styled from "styled-components";
// import { PageWrapper, ContentContainer } from "../styledComponents";
import ProtectedRoute from "./components/ProtectedRoute";
import SignUp from "./components/pages/SignUp";
import PersonalAccount from "./components/pages/PersonalAccount";
import Home from "./components/pages/home";
// import Header from "../ui/Header";
import TokenCheck from "./components/pages/TokenCheck";
import Verification from "./components/pages/Verification";
import PasswordReset from "./components/pages/PasswordReset";
import SetNewPassword from "./components/pages/SetNewPassword";
import Transfer from "./components/pages/Transfer";
import TransactionDetails from "./components/pages/TransactionDetails";
import SaveTransactionPin from "./components/pages/SaveTransactionPin";
import { Cards } from "./components/pages/Cards";
import PinSetup from "./components/pages/PinSetup";
import CardPrinting from "./components/pages/CardPrinting";
import History from "./components/pages/History";
import Loader from "./components/ui/loader/Loader";
import CardholderVerify from "./components/pages/CardholderVerify";
import OrderUsdCard from "./components/pages/OrderUsdCard";
import FundUSDCard from "./components/pages/FundUSDCard";
import UnloadUSDCard from "./components/pages/UnloadUSDCard";
import FreezeUSDCard from "./components/pages/FreezeUSDCard";
import DeleteUSDCard from "./components/pages/DeleteUSDCard";

const AppContainer = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
`;

const MainContainer = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
`;

function App() {
  let location = useLocation();
  let path = location.pathname;

  const { expandSidebar, setExpandSidebar } = useContext(sidebarContext);

  const userInfo = useContext(userInfoContext);

  const { pageLoading, setPageLoading } = useContext(pageLoadingContext);

  const accessToken = localStorage.getItem("access_token");
  const pinSetup = localStorage.getItem("pin_setup");

  if (pageLoading) {
    return <Loader />;
  }
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/personal-account" element={<PersonalAccount />} />
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
      <Route
        path="/pin-setup"
        element={
          <ProtectedRoute
            accessToken={accessToken}
            pinSetup={pinSetup}
            path={path}
          >
            <PinSetup />
          </ProtectedRoute>
        }
      />

      <Route
        path="/data"
        element={
          <ComponentGroup>
            <ProtectedRoute
              accessToken={accessToken}
              pinSetup={pinSetup}
              path={path}
            >
              <BuyData />
            </ProtectedRoute>
          </ComponentGroup>
        }
      />
      <Route
        path="/cabletv"
        element={
          <ComponentGroup>
            <ProtectedRoute
              accessToken={accessToken}
              pinSetup={pinSetup}
              path={path}
            >
              <CableTV />
            </ProtectedRoute>
          </ComponentGroup>
        }
      />
      <Route
        path="/transaction-details"
        element={
          <ComponentGroup>
            <ProtectedRoute
              accessToken={accessToken}
              pinSetup={pinSetup}
              path={path}
            >
              <TransactionDetails />
            </ProtectedRoute>
          </ComponentGroup>
        }
      />
      <Route
        path="/fund-wallet"
        element={
          <ComponentGroup>
            <ProtectedRoute
              accessToken={accessToken}
              pinSetup={pinSetup}
              path={path}
            >
              <FundWallet />
            </ProtectedRoute>
          </ComponentGroup>
        }
      />
      <Route
        path="/cardholder-verify"
        element={
          <ComponentGroup>
            <ProtectedRoute
              accessToken={accessToken}
              pinSetup={pinSetup}
              path={path}
            >
              <CardholderVerify />
            </ProtectedRoute>
          </ComponentGroup>
        }
      />
      <Route
        path="/transfer"
        element={
          <ComponentGroup>
            <ProtectedRoute
              accessToken={accessToken}
              pinSetup={pinSetup}
              path={path}
            >
              <Transfer />
            </ProtectedRoute>
          </ComponentGroup>
        }
      />
      <Route
        path="/order-usd-card"
        element={
          <ComponentGroup>
            <ProtectedRoute
              accessToken={accessToken}
              pinSetup={pinSetup}
              path={path}
            >
              <OrderUsdCard />
            </ProtectedRoute>
          </ComponentGroup>
        }
      />
      <Route
        path="/fund-usd-card/:cardId"
        element={
          <ComponentGroup>
            <ProtectedRoute
              accessToken={accessToken}
              pinSetup={pinSetup}
              path={path}
            >
              <FundUSDCard />
            </ProtectedRoute>
          </ComponentGroup>
        }
      />
      <Route
        path="/unload-usd-card/:cardId"
        element={
          <ComponentGroup>
            <ProtectedRoute
              accessToken={accessToken}
              pinSetup={pinSetup}
              path={path}
            >
              <UnloadUSDCard />
            </ProtectedRoute>
          </ComponentGroup>
        }
      />
      <Route
        path="/freeze-usd-card/:cardId"
        element={
          <ComponentGroup>
            <ProtectedRoute
              accessToken={accessToken}
              pinSetup={pinSetup}
              path={path}
            >
              <FreezeUSDCard />
            </ProtectedRoute>
          </ComponentGroup>
        }
      />
      <Route
        path="/delete-usd-card/:cardId"
        element={
          <ComponentGroup>
            <ProtectedRoute
              accessToken={accessToken}
              pinSetup={pinSetup}
              path={path}
            >
              <DeleteUSDCard />
            </ProtectedRoute>
          </ComponentGroup>
        }
      />

      <Route
        path="/airtime"
        element={
          <ComponentGroup>
            <ProtectedRoute
              accessToken={accessToken}
              pinSetup={pinSetup}
              path={path}
            >
              <Airtime />
            </ProtectedRoute>
          </ComponentGroup>
        }
      />
      <Route
        path="/cards"
        element={
          <ComponentGroup>
            <ProtectedRoute
              accessToken={accessToken}
              pinSetup={pinSetup}
              path={path}
            >
              <Cards />
            </ProtectedRoute>
          </ComponentGroup>
        }
      />
      <Route
        path="/history"
        element={
          <ComponentGroup>
            <ProtectedRoute
              accessToken={accessToken}
              pinSetup={pinSetup}
              path={path}
            >
              <History />
            </ProtectedRoute>
          </ComponentGroup>
        }
      />
      <Route
        path="/card-printing"
        element={
          <ComponentGroup>
            <ProtectedRoute
              accessToken={accessToken}
              pinSetup={pinSetup}
              path={path}
            >
              <CardPrinting />
            </ProtectedRoute>
          </ComponentGroup>
        }
      />
      <Route
        path="/electricity"
        element={
          <ComponentGroup>
            <ProtectedRoute
              accessToken={accessToken}
              pinSetup={pinSetup}
              path={path}
            >
              <Electricity />
            </ProtectedRoute>
          </ComponentGroup>
        }
      />
      <Route
        path="/exams"
        element={
          <ComponentGroup>
            <ProtectedRoute
              accessToken={accessToken}
              pinSetup={pinSetup}
              path={path}
            >
              <Exams />
            </ProtectedRoute>
          </ComponentGroup>
        }
      />
      <Route
        path="/save-transaction-pin"
        element={
          <ComponentGroup>
            <ProtectedRoute accessToken={accessToken}>
              <SaveTransactionPin />
            </ProtectedRoute>
          </ComponentGroup>
        }
      />
      <Route
        path="/exams"
        element={
          <ComponentGroup>
            <ProtectedRoute
              accessToken={accessToken}
              pinSetup={pinSetup}
              path={path}
            >
              <Exams />
            </ProtectedRoute>
          </ComponentGroup>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ComponentGroup>
            <ProtectedRoute
              accessToken={accessToken}
              pinSetup={pinSetup}
              path={path}
            >
              <Dashboard />
            </ProtectedRoute>
          </ComponentGroup>
        }
      />

      <Route path="/" element={<Home />} />
    </Routes>
    //   <MainContainer>
    //     <ComponentDisplay
    //       path={path}
    //       component={<SideBar expandSidebar={expandSidebar} />}
    //     />
    //     <EntryPage expandSidebar={expandSidebar} />
    //   </MainContainer>
  );
}

export default App;
