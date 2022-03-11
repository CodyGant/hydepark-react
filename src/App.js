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
import DaytonaMenu from "./Pages/menus/daytonaMenu/DaytonaMenu"
import PITTSBURGH from "./Pages/menus/Pittsburgh/PITTSBURGH";
import DETROITBirmingham from "./Pages/menus/Detroit-Brigmingham/DETROITBirmingham";
import DETROITNorthville from "./Pages/menus/Detroit-Northville/DETROITNorthville";
import DowntownColumbus from "./Pages/menus/Columbus-Downtown/DowntownColumbus";
import COLUMBUSDublin from "./Pages/menus/Columbus-Dublin/COLUMBUSDublin";
import COLUMBUSUpperArlington from "./Pages/menus/Columbus-UpperArlington/COLUMBUSUpperArlington";
import CLEVELANDWestlake from "./Pages/menus/Cleveland-westLake/CLEVELANDWestlake";
import SARASOTA from "./Pages/menus/Sarasoda/SARASOTA";
import INDIANAPOLIS from "./Pages/menus/Indianapolis/INDIANAPOLIS";
import DAYTONABAR from "./Pages/menus/daytonaMenu/DAYTONABAR";
import DaytonaEarly from './Pages/menus/daytonaMenu/EARLYNIGHTSDAYTONA';
import DaytonaFamily from './Pages/menus/daytonaMenu/FamilyDaytonamenu';
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
          <Route path="/DaytonaMenu" element={<DaytonaMenu />} />
          <Route path="/DowntownColumbus" element={<DowntownColumbus />} />
          <Route path="/PITTSBURGH" element={<PITTSBURGH />} />
          <Route path="/DETROITBirmingham" element={<DETROITBirmingham />} />
          <Route path="/DETROITNorthville" element={<DETROITNorthville />} />
          <Route path="/COLUMBUSDublin" element={<COLUMBUSDublin />} />
          <Route path="/COLUMBUSUpperArlington" element={<COLUMBUSUpperArlington />} />
          <Route path="/CLEVELANDWestlake" element={<CLEVELANDWestlake />} />
          <Route path="/SARASOTA" element={<SARASOTA />} />
          <Route path="/INDIANAPOLIS" element={<INDIANAPOLIS />} />
          <Route path="/DAYTONABAR" element={<DAYTONABAR />} />
          <Route path="/DaytonaEarly" element={<DaytonaEarly />} />
          <Route path="/DaytonaFamily" element={<DaytonaFamily />} />
        </Routes>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
