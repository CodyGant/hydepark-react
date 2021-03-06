import React from "react";
import logo from "../../../assests/hydepark.png";
import { Card, Container, CardGroup, Button } from "react-bootstrap";
function SARASOTABAR() {
  return (
    <div className="menuPage">
      <img
        data-aos="fade-right"
        className="logoImage"
        src={logo}
        alt="building"
      />
      <p className="locationName">SARASOTA</p>
      <p>AVAILABLE IN OUR BAR TUESDAY-FRIDAY 4PM-6PM</p>
      <h3>
        CALL US <a href="/">(248) 594-4369</a>
      </h3>

      <Button className="menupagebutton" href="/SARASOTA">
        DINNER MENU
      </Button>
      <Button className="menupagebutton" href="/SARASOTAEARLY">
        EARLY NIGHTS MENU
      </Button>
      <Button className="menupagebutton" href="/SARASOTABUTCHER">
        BUTCHER GRILLE MENU
      </Button>
      <Button className="menupagebutton" href="/SARASOTAFAMILY">
        FAMILY TO GO MENU
      </Button>
      <Container className="menulanding">
        <h1 className="menuName">HAPPY HOUR MENU</h1>

        <CardGroup>
          <Card data-aos="zoom-in" className="cardBackground">
            <Card.Body className="cardBackground">
              <Card.Title className="cardTitle">BAR PLATES</Card.Title>
              <Card.Text className="menuItems">
                <p>
                  Jumbo Shrimp Cocktail (3){" "}
                  <span className="priceDetails">
                    --- Cocktail sauce <span>( $9 )</span>
                  </span>
                </p>

                <p>
                Wagyu Beef Carpaccio*{" "}
                  <span className="priceDetails">
                    --- Chilled wagyu beef sliced razor thin <span>( $12 )</span>
                  </span>
                </p>
                <p>
                  Grilled Dry Aged Sirloin Sliders*{" "}
                  <span className="priceDetails">
                    --- Aged white cheddar, spicy aioli, crispy onion straws
                    <span> ( $6 )</span>
                  </span>
                </p>
               
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card data-aos="zoom-in" className="cardBackground">
            <Card.Body className="cardBackground" id="bottomCards">
              <Card.Title></Card.Title>
              <Card.Title className="cardTitle">COCKTAILS</Card.Title>
              <Card.Text className="menuItems">
                <p>
                  Bee's Knees{" "}
                  <span className="priceDetails">
                    --- Aviation Gin, Lemon, Honey Simple Syrup
                    <span> ( $7 )</span>
                  </span>
                </p>

                <p>
                  Black Cherry Old Fashioned{" "}
                  <span className="priceDetails">
                    --- Old Forester Bourbon, Amaretto Di Saronno, Black Cherry
                    Syrup, Old Fashioned Bitters <span> ( $7 )</span>
                  </span>
                </p>
                <p>
                Pink Grapefruit{" "}
                  <span className="priceDetails">
                    ---Finlandia Grapefruit Vodka, St. Germain, Grapefruit & Cranberry Juices
                    <span>( $8 )</span>
                  </span>
                </p>

                <p>
                  Classic Cosmopolitan{" "}
                  <span className="priceDetails">
                    --- Deep Eddy Lemon Vodka, Cointreau, Cranberry Juice, Lime   <span>( $8 )</span>
                  </span>
                </p>

                <p>
                  Tito???s Kickin??? Mule{" "}
                  <span className="priceDetails">
                    --- Tito???s Vodka, Ginger Beer, Lime (Keep the Mug Additional
                    $20) <span>( $8 )</span>
                  </span>
                </p>


                <p>
                  White Pear{" "}
                  <span className="priceDetails">
                    --- Grey Goose La Poire Vodka, St. Germain, Lemon
                    <span>( $9 )</span>
                  </span>
                </p>
                <p>
                  Pure Martini{" "}
                  <span className="priceDetails">
                    --- Tito???s Vodka, Served Up <span> ( $9 )</span>
                  </span>
                </p>
                <p>
                  Ros?? All Day{" "}
                  <span className="priceDetails">
                    --- Bombay Sapphire Gin, Lillet Ros??, Lemon, Prosecco{" "}
                    <span> ( $9 )</span>
                  </span>
                </p>
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
        <p>???BLUE- Very red, very cool center</p> <p>???RARE- Red, cool center</p>{" "}
        <p>???MEDIUM RARE- Red, warm center</p>
        <p>???MEDIUM- Pink center</p> <p>???MEDIUM WELL- Slightly pink center </p>
        <p>???WELL- Cooked throughout, no pink</p>
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

export default SARASOTABAR;
