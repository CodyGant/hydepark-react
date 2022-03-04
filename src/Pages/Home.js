import React from "react";
import Header from "../components/Header";
import Broll from "../assests/Broll.mp4";
import building from "../assests/download.jpg";
import { Button, Container, Col, Row } from "react-bootstrap";

const Home = () => {
  return (
    <div className="landing">
      <video src={Broll} muted pointer-events="none" autoplay="true" loop />

     

      <Container className="landingContent">
        <div className="wrapper">
          <h1>HYDE PARK</h1>
          <p>- PRIME STEAKHOUSE -</p>
          <Button href="/Reservations" className="reserBtn">
            MAKE A RESERVATION
          </Button>
        </div>
      </Container>

      {/* <Container fluid className="secondPart-Home">
        <div>
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500"
            className="innerDiv"
          >
            <Row>
              <Col>
                <div>
                  <h1>HYDE PARK</h1>
                  <p>
                    Beauty & Essex has an innovative design that starts in the
                    restaurant’s entrance, a well­curated modern day pawn shop
                    replete with a saxophone, boom­box, quirky artifacts,
                    vintage treasures and an eclectic array of “one­off” pieces
                    of jewelry. Continuing past the pawn shop, guests encounter
                    a grand, circular staircase wrapped around a two­story
                    custom chandelier, but only the adventurous will discover
                    all that Beauty & Essex has to offer. With four distinct
                    dining rooms (one private), two bars, a lounge and a women’s
                    bathroom complete with a salon including a luxurious sofa,
                    and antique perfume bottles. The cuisine, much like the
                    design, is intended to set a new course. Chef Chris Santos
                    was one of the pioneers of the small, share plate dining
                    trend that has swept the nation, and with the Beauty & Essex
                    menu, he once again has created waves on the food scene.
                  </p>
                  <Button>VIEW MENU</Button>
                </div>
              </Col>

              <Col>
                <img src={building} alt="building" />
              </Col>
            </Row>
          </div>
        </div>
      </Container> */}
      
    </div>
  );
};
export default Home;
