import React from "react";

import Building from "../assests/building.png";
import { Button, Container, Col, Row } from "react-bootstrap";

const Home = () => {
  
  return (
    
    <div>
      <div className="background"></div>

      <div className="wrapper">
        <div className="landing">
          <Container fluid className="landingContent">
            <h1>HYDE PARK</h1>
            <p>- PRIME STEAKHOUSE -</p>
            <Button href="/Reservations" className="reserBtn">
              MAKE A RESERVATION
            </Button>
          </Container>
        </div>
        <div className="secondPart">
          <Container fluid className="secondContent">
            <div className = 'flex'>
              <div className="textcontainer">
                <h1>HYDE PARK</h1>
                <p>
                  Beauty & Essex has an innovative design that starts in the
                  restaurant’s entrance, a well­curated modern day pawn shop
                  replete with a saxophone, boom­box, quirky artifacts, vintage
                  treasures and an eclectic array of “one­off” pieces of
                  jewelry. Continuing past the pawn shop, guests encounter a
                  grand, circular staircase wrapped around a two­story custom
                  chandelier, but only the adventurous will discover all that
                  Beauty & Essex has to offer. With four distinct dining rooms
                  (one private), two bars, a lounge and a women’s bathroom
                  complete with a salon including a luxurious sofa, and antique
                  perfume bottles. The cuisine, much like the design, is
                  intended to set a new course. Chef Chris Santos was one of the
                  pioneers of the small, share plate dining trend that has swept
                  the nation, and with the Beauty & Essex menu, he once again
                  has created waves on the food scene.
                </p>
                <Button>VIEW MENU</Button>
                
              </div>
              <div className = 'imageContainer'>
                  <img className = 'buildingImage' src={Building} alt="building" />
                </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};
export default Home;
