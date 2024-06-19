import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from "./Component/Header";
import Main from "./Component/Main";
import Footer from "./Component/Footer";
import Admin from "./Component/Admin";

function App() {
  return (
    <Router>
      <Content />
    </Router>
  );
}

function Content() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/admin" && <Header />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      {location.pathname !== "/admin" && <Footer />}
    </>
  );
}

export default App;
