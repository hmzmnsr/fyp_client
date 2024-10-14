import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import PublicRoutes from "./routes/public.route";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

const AppContent = () => {
  const location = useLocation();


  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col">
      {!isHomePage && <Navbar />}
      <div className="flex-grow">
        <Routes>
          <Route path="/*" element={<PublicRoutes />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
