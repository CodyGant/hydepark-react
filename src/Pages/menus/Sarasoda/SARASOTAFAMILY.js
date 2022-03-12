import React from "react";
import logo from "../../../assests/hydepark.png";
import { Card, Container, CardGroup, Button } from "react-bootstrap";
function SARASOTAFAMILY() {
  return (
    <div className="menuPage">
      <img
        data-aos="fade-right"
        className="logoImage"
        src={logo}
        alt="building"
      />
      <p className="locationName">SARASOTA</p>
      <p>- Available Only for Carryout or Curbside Pickup -</p>
      <p>Three Course Menu for Four or More Starting at $59 Per Person</p>
      <p>
        (Includes individual entrees, salad, and family-style sides and dessert)
      </p>
      <h3>
        CALL US <a href="/">(248) 594-4369</a>
      </h3>

      <Button className="menupagebutton" href="/INDIANAPOLIS">
        DINNER MENU
      </Button>
      <Button className="menupagebutton" href="/INDIANAPOLISEARLY">
        EARLY NIGHTS MENU
      </Button>
      <Button className="menupagebutton" href="/INDIANAPOLISBUTCHER">
        BUTCHER GRILLE MENU
      </Button>
      <Button className="menupagebutton" href="/INDIANAPOLISBAR">
        HAPPY HOUR MENU
      </Button>
      <Container className="menulanding">
        <h1 className="menuName">For The Family Menu</h1>

        <CardGroup>
          <Card data-aos="zoom-in" className="cardBackground">
            <Card.Body className="cardBackground">
              <Card.Title className="cardTitle">SALAD</Card.Title>
              <Card.Text className="menuItems">
                <p>(Choice of one, served family-style)</p>
                <p>
                  Caesar Salad{" "}
                  <span className="priceDetails">
                    --- Hearts of romaine, parmesan, house made croutons
                  </span>
                </p>

                <p>
                  Hyde Park Wedge{" "}
                  <span className="priceDetails">
                    --- Smoked bacon, candied pecans, tomato, blue cheese
                    dressing
                  </span>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card data-aos="zoom-in" className="cardBackground">
            <Card.Body className="cardBackground">
              <Card.Title></Card.Title>
              <Card.Title className="cardTitle">ENTREES</Card.Title>
              <Card.Text className="menuItems">
                <p>(Choice of four or more)</p>
                <p>
                  Filet Mignon 8oz* <span className="priceDetails"></span>
                </p>

                <p>
                  Chicken Milanese{" "}
                  <span className="priceDetails">
                    --- Crispy romano crusted; white wine lemon caper sauce,
                    asparagus
                  </span>
                </p>
                <p>
                  Salmon Filet* <span className="priceDetails"></span>
                </p>
                <p>
                  Chilean Sea Bass* <span className="priceDetails"></span>
                </p>
                <p>
                  Boneless Ribeye Steak*{" "}
                  <span className="priceDetails">--- $6 per person</span>
                </p>
                <p>
                  Lobster Tail 12oz-14oz*{" "}
                  <span className="priceDetails">--- $16 per person </span>
                </p>
               
                <p>
                  Bone-In Ribeye 22oz*{" "}
                  <span className="priceDetails">--- $14 per person</span>
                </p>
                <p>
                  + $14 per person{" "}
                  <span className="priceDetails">--- $10 per person</span>
                </p>
                <p>Add A 5oz Lobster Tail To Any Entree For $19 Each</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card data-aos="zoom-in" className="cardBackground">
            <Card.Body className="cardBackground">
              <Card.Title></Card.Title>
              <Card.Title className="cardTitle">SIDES</Card.Title>
              <Card.Text className="menuItems">
                <p>(Choice of two, served family-style)</p>
                <p>
                  Potatoes Gruyere Gratin <span className="priceDetails"></span>
                </p>

                <p>
                  Roasted Brussels Sprouts{" "}
                  <span className="priceDetails">--- Bacon marmalade</span>
                </p>
                <p>
                  Roasted Garlic Whipped Potatoes{" "}
                  <span className="priceDetails"></span>
                </p>
                <p>
                  Sauteed Asparagus{" "}
                  <span className="priceDetails">--- E.V.O.O., parmesan</span>
                </p>
                <p>
                  Lobster Mac & Cheese{" "}
                  <span className="priceDetails">--- $6 per person</span>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card data-aos="zoom-in" className="cardBackground">
            <Card.Body className="cardBackground">
              <Card.Title></Card.Title>
              <Card.Title className="cardTitle">DESSERT</Card.Title>
              <Card.Text className="menuItems">
                <p>(Choice of one)</p>
                <p>
                  Flourless Chocolate Torte{" "}
                  <span className="priceDetails">
                    --- Semi-sweet, glazed with dark chocolate
                  </span>
                </p>

                <p>
                  New York Style Cheesecake{" "}
                  <span className="priceDetails">
                    --- Graham cracker crust, amarena cherries, chambord cherry
                    glaze
                  </span>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card data-aos="zoom-in" className="cardBackground">
            <Card.Body className="cardBackground" id="wineinfo">
              <Card.Title></Card.Title>
              <Card.Title className="cardTitle" id="wineinfo">
                Complement Your Evening With A Wine Pairing
              </Card.Title>
              <Card.Text className="menuItems" id="wineinfo">
                <p>
                  You May Purchase Any Bottle Of Wine From Our Extensive Wine
                  List To Accompany Your Order{" "}
                </p>

                <p>at 25% Off Menu Price </p>
                <span className="priceDetails">
                  (Up to $500 Retail; 6 Bottle Maximum) Must Be 21 Years or
                  Older to Purchase
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
      <div className="menuBottom">
        <h3>
          BLANK ~ <span>General Manager</span>
        </h3>
        <h3>
        BLANK ~ <span>Executive Chef</span>
        </h3>
        <p>
          Before placing your order please let us know if anyone in your party
          has a food allergy.
        </p>
        <p>•BLUE- Very red, very cool center</p> <p>•RARE- Red, cool center</p>{" "}
        <p>•MEDIUM RARE- Red, warm center</p>
        <p>•MEDIUM- Pink center</p> <p>•MEDIUM WELL- Slightly pink center </p>
        <p>•WELL- Cooked throughout, no pink</p>
        <span>
          *Consuming raw or undercooked meats, poultry, seafood or shellfish may
          increase your risk of foodborne illness, especially if you have
          certain medical conditions.
        </span>
      </div>
      <style jsx>{`
      .navbar a,
      p {
        color: black !important;
      }
      .priceDetails {
        font-style: italic !important;
        color: #521111 !important;
        font-weight: 500;
      }
      @media (max-width: 992px) {
        .navbar a
       {
        color: white !important;
     
      }
      .navbar p
       {
        color: white !important;
     
      }
    `}</style>
    </div>
  );
}

export default SARASOTAFAMILY;
