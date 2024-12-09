import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import "./styles/tailwind.css";
import "./styles/font.css";
import "./styles/index.css";
import CXTLanding from "./pages/CXTLanding";
import CXTSignUp from "./pages/CXTSignUp";
import CTXEventTickets from "./pages/CTXEventTickets";
import CXTListPage from "./pages/CXTListPage";

function App() {
  return (
    <Theme accentColor="orange" grayColor="sand" radius="medium" scaling="95%">
      <div className="font-poppins">
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
          <Router>
            <Routes>
              <Route path="/" element={<CXTLanding />} />
              <Route path="/cxtsignup" element={<CXTSignUp />} />
              <Route path="/ctxeventtickets" element={<CTXEventTickets />} />
              <Route path="/cxtlistpage" element={<CXTListPage />} />
            </Routes>
          </Router>
        </GoogleOAuthProvider>
      </div>
    </Theme>
  );
}

export default App;
