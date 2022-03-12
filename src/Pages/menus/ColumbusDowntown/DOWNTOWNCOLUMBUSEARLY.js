import React from "react";
import logo from "../../../assests/hydepark.png";
import { Card, Container, CardGroup, Button } from "react-bootstrap";
function DOWNTOWNCOLUMBUSEARLY() {
  return (
    <div className="menuPage">
      <img
        data-aos="fade-right"
        className="logoImage"
        src={logo}
        alt="building"
      />
      <p className="locationName">DOWNTOWN COLUMBUS</p>
      <p>
        Available Nightly Until 6pm, (All Night Sundays) Not Available on
        Holidays
      </p>
      <h3>
        CALL US <a href="/">(614) 224-2204</a>
      </h3>

      <Button className="menupagebutton" href="/DOWNTOWNCOLUMBUS">
        DINNER MENU
      </Button>
      <Button className="menupagebutton" href="/DOWNTOWNCOLUMBUS">
        HAPPY HOUR MENU
      </Button>
      <Button className="menupagebutton" href="/DOWNTOWNCOLUMBUSBUTCHER">
        BUTCHER GRILLE MENU
      </Button>
      <Button className="menupagebutton" href="/DOWNTOWNCOLUMBUSFAMILY">
        FAMILY TO GO MENU
      </Button>

      <Container className="menulanding">
        <h1 className="menuName">Early Nights Menu</h1>

        <CardGroup>
          <Card data-aos="zoom-in" className="cardBackground">
            <Card.Body className="cardBackground">
              <Card.Title className="cardTitle">SOUP • SALAD</Card.Title>
              <Card.Text className="menuItems">
                <p>Select One</p>
                <p>
                  Lobster Bisque{" "}
                  <span className="priceDetails">
                    --- Sherry poached lobster
                  </span>
                </p>

                <p>Classic Baked Onion Soup </p>

                <p>
                  Hyde Park Wedge{" "}
                  <span className="priceDetails">
                    --- Smoked bacon, candied pecans, tomato, blue cheese
                    dressing, port wine drizzle
                  </span>
                </p>
                <p>
                  Caesar Salad{" "}
                  <span className="priceDetails">
                    --- Made to order garlic croutons, chopped anchovies upon
                    request{" "}
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
              <Card.Title className="cardTitle">ENTREES $21.95</Card.Title>
              <Card.Text className="menuItems">
                <p>Select One</p>
                <p>
                  Crab Wedge Salad{" "}
                  <span className="priceDetails">
                    --- Crisp iceberg, tomato, smoked bacon, crab meat, house
                    vinaigrette
                  </span>
                </p>

                <p>
                  Chicken Milanese{" "}
                  <span className="priceDetails">
                    --- Crispy romano crusted; white wine lemon caper sauce,
                    asparagus
                  </span>
                </p>
                <p>
                  Dry Aged Chopped Steak*{" "}
                  <span className="priceDetails">
                    --- Dry aged ground beef, charbroiled, roasted garlic
                    whipped potatoes, mushroom bordelaise sauce, crispy onion
                    straws
                  </span>
                </p>
                <p>
                  Shrimp Mac & Cheese{" "}
                  <span className="priceDetails">
                    --- Five cheese, toasted breadcrumbs
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
              <Card.Title className="cardTitle">ENTREES $32.95</Card.Title>
              <Card.Text className="menuItems">
                <p>Select One</p>
                <p>
                  Salmon Filet*{" "}
                  <span className="priceDetails">
                    --- Sautéed spinach, roasted garlic whipped potatoes, lemon
                    crystal citrus sauce
                  </span>
                </p>

                <p>
                  Petite Twin Filet Mignon 6oz*{" "}
                  <span className="priceDetails">
                    --- Roasted garlic whipped potatoes, béarnaise sauce, crispy
                    onion straws
                  </span>
                </p>
                <p>
                  Crab Cake Oscar{" "}
                  <span className="priceDetails">
                    --- Sauteed asparagus, lumb crab, bearnaise
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
              <Card.Title className="cardTitle">ENTREE $43.95</Card.Title>
              <Card.Text className="menuItems">
                <p>Select One</p>
                <p>Available for a Limited Time Only</p>
                <p>
                  Surf & Turf*{" "}
                  <span className="priceDetails">
                    --- Petite Filet Mignon 6oz & 4oz Lobster Tail
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

export default DOWNTOWNCOLUMBUSEARLY;
