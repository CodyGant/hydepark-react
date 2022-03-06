import React from "react";
import Building from "../assests/building.png";
import { Button, Container, CardGroup, Card } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <div className="background"></div>

      <div className="wrapper">
        <div className="landing">
          <Container fluid className="landingContent" data-aos="fade-down">
            <h1>HYDE PARK</h1>
            <p>- PRIME STEAKHOUSE -</p>
            <Button href="/Reservations" className="reserBtn">
              MAKE A RESERVATION
            </Button>
          </Container>
        </div>
        <div className="secondPart" >
          <Container fluid className="secondContent" data-aos="fade-down">
            <div className="flex">
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
                <Button className="menuButton">VIEW MENU</Button>
              </div>
              <div className="imageContainer">
                <img className="buildingImage" src={Building} alt="building" />
              </div>
            </div>
          </Container>
        </div>

        <Container fluid className="butcherBox" >
          <div className="butcherFlex" data-aos="fade-down">
            <div className="butchertext">
              <h1>BUTCHER GRILLE BOX</h1>
              <p></p>
              <p>
                Now introducing Hyde Park Butcher grill box. Enjoy our premium
                steaks in the comfort of your home.
                <span>All steaks are Cryovaced and Aged for 28 Days.
                We suggest you prepare or freeze steaks within seven days and fresh fish within 48 hours.</span>
              </p>
              <h2>Premium Selections</h2>
              <h3>Avalible For Pick-Up In Stores Only</h3>
              <Button className="butcherButton">BUTCHER BOX MENU</Button>
            </div>
          </div>
        </Container>

        <Container fluid className = 'cardContainer' >
          <div  data-aos="fade-down">
            <div className="butchertext">
            <CardGroup>
            <Card data-aos="flip-left" className = 'card' >
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-person-workspace"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" />
                  </svg>
                </Card.Title>
                <Card.Title>VIRTUAL CONSULTATION</Card.Title>
                <Card.Text>
                  A free in-home or virtual consultation to define the needs of
                  the homeowner and to educate them on how solar works.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card data-aos="flip-right" >
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-sun"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                  </svg>
                </Card.Title>
                <Card.Title>CUSTOMIZED SOLAR PANEL SYSTEMS</Card.Title>
                <Card.Text>
                  A customized solar panel system designed to offset the current
                  electricity bill. The panel placement will be structured to
                  ensure the maximum production of energy and designed to be
                  aesthetically pleasing to the homeowner.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card data-aos="flip-right" >
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-envelope-paper-heart"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1.133l.941.502A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765L2 3.133V2Zm0 2.267-.47.25A1 1 0 0 0 1 5.4v.817l1 .6v-2.55Zm1 3.15 3.75 2.25L8 8.917l1.25.75L13 7.417V2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v5.417Zm11-.6 1-.6V5.4a1 1 0 0 0-.53-.882L14 4.267v2.55ZM8 2.982C9.664 1.309 13.825 4.236 8 8 2.175 4.236 6.336 1.31 8 2.982Zm7 4.401-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734Z"
                    />
                  </svg>
                </Card.Title>
                <Card.Title>PERMITTING & HOA PAPERWORK</Card.Title>
                <Card.Text>
                  All permitting and HOA paperwork to ensure a smooth transition
                  to solar.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card data-aos="flip-left">
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-house-heart"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.646a.5.5 0 0 0 .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207l-5-5-5 5V13.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7.207Zm-5-.225C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.309 8 6.982Z"
                    />
                  </svg>
                </Card.Title>
                <Card.Title>HIGH QUALITY INSTALLATION</Card.Title>
                <Card.Text>
                  High quality installation of equipment that comes with a
                  25-year warranty and also a 25-year roof penetration warranty.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card data-aos="flip-right" >
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-person-hearts"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.5 1.246c.832-.855 2.913.642 0 2.566-2.913-1.924-.832-3.421 0-2.566ZM9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276ZM15 2.165c.555-.57 1.942.428 0 1.711-1.942-1.283-.555-2.281 0-1.71Z"
                    />
                  </svg>
                </Card.Title>
                <Card.Title>WE ALSO ASSIST WITH</Card.Title>
                <Card.Text>
                  <p>Battery Storage Options</p>
                  <p>Home Energy Efficiency </p>
                  <p> Roof Replacement</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
              
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Home;
