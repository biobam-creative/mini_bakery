import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";

import { theme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Disclaimer from "./pages/Disclaimer";

function App() {
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);

  const handleAcceptDisclaimer = () => {
    setDisclaimerAccepted(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Helmet>
        <title>
          Nigerian Bread Mini Bakery - Authentic Nigerian Bread in the UK
        </title>
        <meta
          name="description"
          content="Taste the authentic flavors of home with our traditional Nigerian bread, baked fresh daily in the UK and delivered to your doorstep"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Router>
        {/* Show disclaimer until it's accepted */}
        {!disclaimerAccepted ? (
          <Disclaimer onAccept={handleAcceptDisclaimer} />
        ) : (
          <>
            <Header />
            <main>
              <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
                <Route
                  path="/disclaimer"
                  element={<Disclaimer onAccept={handleAcceptDisclaimer} />}
                />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </main>
            <Footer />
          </>
        )}
      </Router>
    </ThemeProvider>
  );
}

export default App;
