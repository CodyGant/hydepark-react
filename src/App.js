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


import DETROITBIRMINGHAM from "./Pages/menus/Detroit-Brigmingham/DETROITBIRMINGHAM";

import DETROITNorthville from "./Pages/menus/Detroit-Northville/DETROITNorthville";

import COLUMBUSDUBLIN from "./Pages/menus/Columbus-Dublin/COLUMBUSDUBLIN";
import COLUMBUSDUBLINBAR from "./Pages/menus/Columbus-Dublin/COLUMBUSDUBLINBAR";
import COLUMBUSDUBLINBUTCHER from "./Pages/menus/Columbus-Dublin/COLUMBUSDUBLINBUTCHER";
import COLUMBUSDUBLINEARLY from "./Pages/menus/Columbus-Dublin/COLUMBUSDUBLINEARLY";
import COLUMBUSDUBLINFAMILY from "./Pages/menus/Columbus-Dublin/COLUMBUSDUBLINFAMILY";



import UPPERARLINGTONCOLUMBUS from "./Pages/menus/Columbus-UpperArlington/UPPERARLINGTONCOLUMBUS";
import UPPERARLINGTONCOLUMBUSBAR from "./Pages/menus/Columbus-UpperArlington/UPPERARLINGTONCOLUMBUSBAR";
import UPPERARLINGTONCOLUMBUSBUTCHER from "./Pages/menus/Columbus-UpperArlington/UPPERARLINGTONCOLUMBUSBUTCHER";
import UPPERARLINGTONCOLUMBUSEARLY from "./Pages/menus/Columbus-UpperArlington/UPPERARLINGTONCOLUMBUSEARLY";
import UPPERARLINGTONCOLUMBUSFAMILY from "./Pages/menus/Columbus-UpperArlington/UPPERARLINGTONCOLUMBUSFAMILY";

import SARASOTA from "./Pages/menus/Sarasoda/SARASOTA";

import INDIANAPOLIS from "./Pages/menus/Indianapolis/INDIANAPOLIS";

import DaytonaMenu from "./Pages/menus/daytonaMenu/DaytonaMenu"
import DAYTONABAR from "./Pages/menus/daytonaMenu/DAYTONABAR";
import DaytonaEarly from './Pages/menus/daytonaMenu/EARLYNIGHTSDAYTONA';
import DaytonaFamily from './Pages/menus/daytonaMenu/FamilyDaytonamenu';

import PITTSBURGH from "./Pages/menus/Pittsburgh/PITTSBURGH";
import PITTSBURGHBAR from './Pages/menus/Pittsburgh/PITTSBURGHBAR';
import PITTSBURGHBUTCHER from './Pages/menus/Pittsburgh/PITTSBURGHBUTCHER';
import PITTSBURGHEARLY from './Pages/menus/Pittsburgh/PITTSBURGHEARLY';
import PITTSBURGHfamily from './Pages/menus/Pittsburgh/PITTSBURGHfamily';

import CLEVELANDWESTLAKE from "./Pages/menus/Cleveland-westLake/CLEVELANDWESTLAKE";
import CLEVELANDWESTLAKEBAR from './Pages/menus/Cleveland-westLake/CLEVELANDWESTLAKEBAR';
import CLEVELANDWESTLAKEEARLY from './Pages/menus/Cleveland-westLake/CLEVELANDWESTLAKEEARLY';
import CLEVELANDWESTLAKEFAMILY from './Pages/menus/Cleveland-westLake/CLEVELANDWESTLAKEFAMILY';
import CLEVELANDWESTLAKEBUTCHER from './Pages/menus/Cleveland-westLake/CLEVELANDWESTLAKEBUTCHER';

import DOWNTOWNCOLUMBUS from "./Pages/menus/Columbus-Downtown/DOWNTOWNCOLUMBUS";
import DOWNTOWNCOLUMBUSBAR from "./Pages/menus/Columbus-Downtown/DOWNTOWNCOLUMBUSBAR";
import DOWNTOWNCOLUMBUSBUTCHER from "./Pages/menus/Columbus-Downtown/DOWNTOWNCOLUMBUSBUTCHER";
import DOWNTOWNCOLUMBUSEARLY from "./Pages/menus/Columbus-Downtown/DOWNTOWNCOLUMBUS";
import DOWNTOWNCOLUMBUSFAMILY from "./Pages/menus/Columbus-Downtown/DOWNTOWNCOLUMBUSFAMILY";

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
        
          <Route path="/DOWNTOWNCOLUMBUS" element={<DOWNTOWNCOLUMBUS />} />
          <Route path="/DOWNTOWNCOLUMBUSBAR" element={<DOWNTOWNCOLUMBUSBAR />} />
          <Route path="/DOWNTOWNCOLUMBUSBUTCHER" element={<DOWNTOWNCOLUMBUSBUTCHER />} />
          <Route path="/DOWNTOWNCOLUMBUSEARLY" element={<DOWNTOWNCOLUMBUSEARLY />} />
          <Route path="/DOWNTOWNCOLUMBUSFAMILY" element={<DOWNTOWNCOLUMBUSFAMILY />} />
          
          <Route path="/DETROITBIRMINGHAM" element={<DETROITBIRMINGHAM />} />

          <Route path="/DETROITNorthville" element={<DETROITNorthville />} />

          <Route path="/COLUMBUSDUBLIN" element={<COLUMBUSDUBLIN />} />
          <Route path="/COLUMBUSDUBLINBAR" element={<COLUMBUSDUBLINBAR />} />
          <Route path="/COLUMBUSDUBLINBUTCHER" element={<COLUMBUSDUBLINBUTCHER />} />
          <Route path="/COLUMBUSDUBLINEARLY" element={<COLUMBUSDUBLINEARLY />} />
          <Route path="/COLUMBUSDUBLINFAMILY" element={<COLUMBUSDUBLINFAMILY />} />

          <Route path="/UPPERARLINGTONCOLUMBUS" element={<UPPERARLINGTONCOLUMBUS />} />
          <Route path="/UPPERARLINGTONCOLUMBUSBAR" element={<UPPERARLINGTONCOLUMBUSBAR />} />
          <Route path="/UPPERARLINGTONCOLUMBUSBUTCHER" element={<UPPERARLINGTONCOLUMBUSBUTCHER />} />
          <Route path="/UPPERARLINGTONCOLUMBUSEARLY" element={<UPPERARLINGTONCOLUMBUSEARLY />} />
          <Route path="/UPPERARLINGTONCOLUMBUSFAMILY" element={<UPPERARLINGTONCOLUMBUSFAMILY />} />

          
          <Route path="/SARASOTA" element={<SARASOTA />} />
          <Route path="/INDIANAPOLIS" element={<INDIANAPOLIS />} />
          
          <Route path="/DaytonaMenu" element={<DaytonaMenu />} />
          <Route path="/DAYTONABAR" element={<DAYTONABAR />} />
          <Route path="/DaytonaEarly" element={<DaytonaEarly />} />
          <Route path="/DaytonaFamily" element={<DaytonaFamily />} />
          
          <Route path="/PITTSBURGH" element={<PITTSBURGH />} />
          <Route path="/PITTSBURGHBAR" element={<PITTSBURGHBAR />} />
          <Route path="/PITTSBURGHBUTCHER" element={<PITTSBURGHBUTCHER />} />
          <Route path="/PITTSBURGHEARLY" element={<PITTSBURGHEARLY />} />
          <Route path="/PITTSBURGHfamily" element={<PITTSBURGHfamily />} />

          <Route path="/CLEVELANDWESTLAKE" element={<CLEVELANDWESTLAKE />} />
          <Route path="/CLEVELANDWESTLAKEBAR" element={<CLEVELANDWESTLAKEBAR />} />
          <Route path="/CLEVELANDWESTLAKEEARLY" element={<CLEVELANDWESTLAKEEARLY />} />
          <Route path="/CLEVELANDWESTLAKEFAMILY" element={<CLEVELANDWESTLAKEFAMILY />} />
          <Route path="/CLEVELANDWESTLAKEBUTCHER" element={<CLEVELANDWESTLAKEBUTCHER />} />
        </Routes>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
