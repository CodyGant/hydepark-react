import Header from "./components/Header";
import Footer from "./components/footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Locations from "./Pages/Locations";
import Reservations from "./Pages/Reservations";
import NoMatch from "./Pages/NoMatch";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <React.Fragment>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Locations" element={<Locations />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Reservations" element={<Reservations />} />
          <Route path="/NoMatch" element={<NoMatch />} />
        </Routes>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
