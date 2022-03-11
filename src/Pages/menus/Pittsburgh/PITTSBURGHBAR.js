import React from "react";
import logo from "../../../assests/hydepark.png";
import { Card, Container, CardGroup, Button } from "react-bootstrap";
function PITTSBURGHBAR() {
  return (
    <div className="menuPage">
      <img
        data-aos="fade-right"
        className="logoImage"
        src={logo}
        alt="building"
      />
      <p className="locationName">PITTSBURGH</p>
      <p>AVAILABLE IN OUR BAR & TERRACE MONDAY-FRIDAY 4PM-630PM</p>
      <h3>
        CALL US <a href="/">(412) 222-4014</a>
      </h3>

      <Button className = 'menupagebutton' href = '/PITTSBURGH'>DINNER MENU</Button>
      <Button className = 'menupagebutton' href='/PITTSBURGHEARLY'>EARLY NIGHTS MENU</Button>
      <Button className = 'menupagebutton' href='/PITTSBURGHBUTCHER'>BUTCHER GRILLE MENU</Button>
      <Button className = 'menupagebutton'  href = '/PITTSBURGHfamily'>FAMILY TO GO MENU</Button>
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
                    --- Cocktail sauce <span>($8)</span>
                  </span>
                </p>

                <p>
                  Wagyu Beef Carpaccio*{" "}
                  <span className="priceDetails">
                    --- Chilled wagyu beef sliced razor thin <span>( $10)</span>
                  </span>
                </p>
                <p>
                  Grilled Dry Aged Sirloin Sliders*{" "}
                  <span className="priceDetails">
                    --- Aged white cheddar, spicy aioli, crispy onion straws
                    <span> ( $5 )</span>
                  </span>
                </p>
                <p>
                  Beef Tenderloin Sliders*{" "}
                  <span className="priceDetails">
                    --- Horseradish sauce, spinach, crispy onion straws{" "}
                    <span> ($8)</span>
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
                    ---Aviation Gin, Lemon, Honey Simple Syrup<span> ($7)</span>
                  </span>
                </p>

                <p>
                  Black Cherry Old Fashioned{" "}
                  <span className="priceDetails">
                    --- Old Forester Bourbon, Amaretto Di Saronno, Black Cherry
                    Syrup, Old Fashioned Bitters <span> ($7)</span>
                  </span>
                </p>
                <p>
                  Pink Grapefruit{" "}
                  <span className="priceDetails">
                    --- Finlandia Grapefruit Vodka, St. Germain, Grapefruit &
                    Cranberry Juices <span>( $8)</span>
                  </span>
                </p>
                <p>
                  Tito’s Kickin’ Mule{" "}
                  <span className="priceDetails">
                    --- Tito’s Vodka, Ginger Beer, Lime (Keep the Mug Additional
                    $20) <span>( $8)</span>
                  </span>
                </p>
                <p>
                  Classic Cosmopolitan{" "}
                  <span className="priceDetails">
                    ---Red pepper aioli, spicy mustard sauce <span>( $22)</span>
                  </span>
                </p>
                <p>
                  Chilled Lobster Tail Cocktail{" "}
                  <span className="priceDetails">
                    --- Deep Eddy Lemon Vodka, Cointreau, Cranberry Juice, Lime{" "}
                    <span> ($8)</span>
                  </span>
                </p>
                <p>
                  White Pear{" "}
                  <span className="priceDetails">
                    --- Grey Goose La Poire Vodka, St. Germain, Lemon
                    <span>( $9)</span>
                  </span>
                </p>
                <p>
                  Pure Martini{" "}
                  <span className="priceDetails">
                    --- Tito’s Vodka, Served Up <span> ($9)</span>
                  </span>
                </p>
                <p>
                  Rosé All Day{" "}
                  <span className="priceDetails">
                    --- Bombay Sapphire Gin, Lillet Rosé, Lemon, Prosecco{" "}
                    <span> ($9)</span>
                  </span>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
      <div className="menuBottom">
        <h3>
          Eric Black ~ <span>General Manager</span>
        </h3>
        <h3>
          Nick Miller ~ <span>Executive Chef</span>
        </h3>
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

export default PITTSBURGHBAR;
