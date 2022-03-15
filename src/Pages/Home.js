import React from "react";
import Building from "../assests/building.png";
import privateDining from "../assests/large.jpg";
import Bar from "../assests/hydeparkBar.jpg";
import courseMeal from "../assests/coursemeal.jpg";
import wine from "../assests/wine.jpg";
import giftCard from "../assests/giftCard.png";
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
        <div className="secondPart">
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
                <Button className="menuButton" href='/Menu'>VIEW MENU</Button>
              </div>
              <div className="imageContainer">
                <img data-aos="fade-right" className="buildingImage" src={Building} alt="building" />
              </div>
            </div>
          </Container>
        </div>

        <Container fluid className="butcherBox">
          <div className="butcherFlex" data-aos="fade-down">
            <div className="butchertext">
              <h1>BUTCHER GRILLE BOX</h1>
              <p></p>
              <p>
                Now introducing Hyde Park Butcher grill box. Enjoy our premium
                steaks in the comfort of your home.
                <span>
                  All steaks are Cryovaced and Aged for 28 Days. We suggest you
                  prepare or freeze steaks within seven days and fresh fish
                  within 48 hours.
                </span>
              </p>
              <h2>Premium Selections</h2>
              <h3>Avalible For Pick-Up In Stores Only</h3>
              <Button className="butcherButton" href = '/butcher'>BUTCHER BOX MENU</Button>
            </div>
          </div>
        </Container>

        <Container fluid className="cardContainer">
          <div data-aos="fade-down">
            <div className="butchertext">
              <CardGroup>
                <Card data-aos="flip-left" className="card">
                  <Card.Img variant="top" src={Bar} alt="building" />
                  <Card.Body>
                    <Card.Title>THE BAR AT HYDE PARK.</Card.Title>

                    <Card.Text>
                      <br />
                      Martinis, Cocktails and Bar Plates starting at $5 Monday -
                      Friday *Hours and days vary by location.* The Hyde Park
                      Manhattan: Woodfor Reserve Bourbon, Sweet Vermouth Gourmet
                      Amarena Cherries, and Old Fashined Bitters, Served Up
                    </Card.Text>
                    
                  </Card.Body>
                  <Button  className ='cardButton' href = '/privateDining'>Learn More</Button>
                </Card>

                <Card data-aos="flip-right">
                  <Card.Img variant="top" src={privateDining} alt="building" />
                  <Card.Body>
                    <Card.Title>PRIVATE DINING.</Card.Title>
                    <br />
                    <Card.Text>
                      Hyde Park's Private Dining is Perfect for Any Event, from
                      Meetings to Special Celebrations. Let our Meeting and
                      Event Planners Show you Our Professional Staff,
                      Award-Winning Menus and Elegantly Decorated Private and
                      Semi-Private Venues will Make Your Event a Success Well
                      Beyond Your Expectations.
                    </Card.Text>
                    
                  </Card.Body>
                  <Button  className ='cardButton' href = '/privateDining'>Learn More</Button>
                </Card>

                <Card data-aos="flip-right" className="card">
                  <Card.Img variant="top" src={courseMeal} alt="building" />
                  <Card.Body>
                    <Card.Title>EARLY NIGHTS TWO COURSE DINNER.</Card.Title>
                    <br />
                    <Card.Text>
                      Available Monday - Satuday Until 6PM (6:30 Daytona Beach
                      Location) & All Night Sunday *Days and Hours of operation
                      Vary for each Store.
                    </Card.Text>
                    
                  </Card.Body>
                  <Button  className ='cardButton' href = '/earlynights'>Learn More</Button>
                </Card>

                <Card data-aos="flip-left" className="card">
                  <Card.Img variant="top" src={wine} alt="building" />
                  <Card.Body>
                    <Card.Title>FROM THE CELLAR.</Card.Title>
                    <br />
                    <Card.Text>
                      Recently, Hyde Park Prime Steakhouse blended, with the
                      help of Winemaker Nick Goldschmidt, a meritage-style blend
                      called RENDITION, Merlot-based, this sultry wine is
                      exclusive to the Hyde Park Resaurant CardGroupand limited
                      to 500 cases.
                    </Card.Text>
                    
                  </Card.Body>
                  <Button  className ='cardButton' href = '/privateDining'>Learn More</Button>
                </Card>

                <Card data-aos="flip-right" className="card">
                  <Card.Img variant="top" src={giftCard} alt="building" />
                  <Card.Body>
                    <Card.Title>THE PERFECT GIFT.</Card.Title>
                    <br />
                    <Card.Text>
                      A Hyde Park Resaurant Group Gift Card is the Gift of a
                      memorable experince and a reflection of you, as a Generous
                      Thoughtful Person. Hyde Park Gift Cards are Amoung
                      Everyones Favorite, for Giving and reciving.
                    </Card.Text>
                    
                  </Card.Body>
                  <Button  className ='cardButton' href = '/privateDining'>Learn More</Button>
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
