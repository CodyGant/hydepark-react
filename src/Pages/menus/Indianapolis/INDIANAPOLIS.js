import React from "react";

import logo from "../../../assests/hydepark.png";
import { Card, Container, CardGroup, Button } from "react-bootstrap";
function INDIANAPOLIS() {
  return (
    <div className="menuPage">
      <img
        data-aos="fade-right"
        className="logoImage"
        src={logo}
        alt="building"
      />
      <p className="locationName">INDIANAPOLIS</p>
      <h3>CALL US <a href='/'>(386) 226-9844</a></h3>
      
      <Button>HAPPY HOUR MENU</Button>
      <Button>EARLY NIGHTS MENU</Button>
      <Button>BUTCHER GRILLE MENU</Button>
      <Button>FAMAILY TO GO MENU</Button>
      <Container className="menulanding">
        
        <h1 className="menuName">DINNER MENU</h1>
       



        <CardGroup>
          <Card data-aos="zoom-in" className="cardBackground">
            <Card.Body className="cardBackground">
              <Card.Title></Card.Title>
              <Card.Title className="cardTitle">RAW BAR • APPETIZER</Card.Title>
              <Card.Text className="menuItems">
                <p>
                  Jumbo Lump Crab Cocktail{" "}
                  <span className="priceDetails">
                    ---Spicy mustard, cocktail sauce <span>22</span>
                  </span>
                </p>

                <p>
                  King Crab Legs, center cut 5oz{" "}
                  <span className="priceDetails">
                    ---Spicy mustard & Cocktail Sauce <span>25</span>
                  </span>
                </p>
                <p>
                  Wagyu Beef Carpaccio*{" "}
                  <span className="priceDetails">
                    ---Chilled wagyu beef sliced razor thin <span>19</span>
                  </span>
                </p>
                <p>
                  Shrimp Cocktail{" "}
                  <span className="priceDetails">
                    ---Cocktail sauce (3,5) <span>14/22</span>
                  </span>
                </p>
                <p>
                  Crab Cake{" "}
                  <span className="priceDetails">
                    ---Red pepper aioli, spicy mustard sauce <span>22</span>
                  </span>
                </p>
                <p>
                  Chilled Lobster Tail Cocktail{" "}
                  <span className="priceDetails">
                    ---Spicy mustard & classic cocktail sauce <span>23</span>
                  </span>
                </p>
                <p>
                  Oysters on the Half Shell*{" "}
                  <span className="priceDetails">
                    ---(4) <span>15</span> - Add <span>3.75</span> each
                  </span>
                </p>
                <p>
                  Ahi Tuna Tower*{" "}
                  <span className="priceDetails">
                    ---Avocado, wasabi soy lime dressing, wontons{" "}
                    <span>20</span>
                  </span>
                </p>
                <p>
                  Crispy Calamari*{" "}
                  <span className="priceDetails">
                    ---Thai sweet hot chili sauce, peppers, carrots, scallions,
                    roasted cashews <span>19</span>
                  </span>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card data-aos="zoom-in" className="cardBackground">
            <Card.Body className="cardBackground">
              <Card.Title></Card.Title>
              <Card.Title className="cardTitle">SOUPS • SALADS</Card.Title>
              <Card.Text className="menuItems">
                <p>
                  Lobster Bisque{" "}
                  <span className="priceDetails">
                    ---Sherry poached lobster <span>16</span>
                  </span>
                </p>

                <p>
                  Caesar Salad{" "}
                  <span className="priceDetails">
                    ---Made to order garlic croutons, chopped anchovies upon
                    request <span> 13</span>
                  </span>
                </p>
                <p>
                  Classic Baked Onion Soup{" "}
                  <span className="priceDetails">
                    --- <span> 14</span>
                  </span>
                </p>
                <p>
                  Hyde Park Wedge{" "}
                  <span className="priceDetails">
                    ---Smoked bacon, candied pecans, heirloom tomatoes, blue
                    cheese dressing, port wine drizzle <span>14</span>
                  </span>
                </p>
                <p>
                  Double Chop Salad{" "}
                  <span className="priceDetails">
                    ---Crispy pancetta, hard egg, juliennned English cucumber,
                    heirloom tomatoes, red onion, celery, buttermilk ranch, aged
                    white cheddar, crispy onions <span>15</span>
                  </span>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>

        <CardGroup>
          <Card data-aos="zoom-in" className="cardBackground">
            <Card.Body className="cardBackground">
              <Card.Title className="cardTitle">STEAKS • CHOPS</Card.Title>
              <Card.Text className="menuItems">
                <p>
                  Lobster Bisque{" "}
                  <span className="priceDetails">
                    ---Sherry poached lobster <span>16</span>
                  </span>
                </p>

                <p>
                  Caesar Salad{" "}
                  <span className="priceDetails">
                    ---Made to order garlic croutons, chopped anchovies upon
                    request <span> 13</span>
                  </span>
                </p>
                <p>
                  Classic Baked Onion Soup{" "}
                  <span className="priceDetails">
                    --- <span> 14</span>
                  </span>
                </p>
                <p>
                  Hyde Park Wedge{" "}
                  <span className="priceDetails">
                    ---Smoked bacon, candied pecans, heirloom tomatoes, blue
                    cheese dressing, port wine drizzle <span>14</span>
                  </span>
                </p>
                <p>
                  Double Chop Salad{" "}
                  <span className="priceDetails">
                    ---Crispy pancetta, hard egg, juliennned English cucumber,
                    heirloom tomatoes, red onion, celery, buttermilk ranch, aged
                    white cheddar, crispy onions <span>15</span>
                  </span>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card data-aos="zoom-in" className="cardBackground">
            <Card.Body className="cardBackground">
              <Card.Title className="cardTitle">SEAFOOD</Card.Title>
              <Card.Text className="menuItems">
                <p>
                  Surf & Turf*{" "}
                  <span className="priceDetails">
                    ---6oz Filet & Twin Lobster Tails, 4oz each <span>75</span>
                  </span>
                </p>

                <p>
                  Lobster Tail 12oz-14oz{" "}
                  <span className="priceDetails">
                    ---
                    <span> 72</span>
                  </span>
                </p>
                <p>
                  Blackboard Fresh Fish*{" "}
                  <span className="priceDetails">
                    ---Pan-seared; lemon crystal citrus sauce or soy vinaigrette{" "}
                    <span> Salmon Filet 38 ---</span>{" "}
                    <span> Chilean Sea Bass 47</span>
                  </span>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card data-aos="zoom-in" className="cardBackground">
            <Card.Body className="cardBackground">
              <Card.Title className="cardTitle">BAR FAVORITES</Card.Title>
              <Card.Text className="menuItems">
                <p>
                  Waltrip's Dry Aged Cheeseburger* 9oz{" "}
                  <span className="priceDetails">
                    --- Fries or Onion Straws <span>16</span>
                  </span>
                </p>

                <p>
                  Bacon Gruyère Dry Aged Burger* 9oz{" "}
                  <span className="priceDetails">
                    --- Fries or Onion Straws
                    <span> 17</span>
                  </span>
                </p>
                <p>
                  Chicken Milanese*{" "}
                  <span className="priceDetails">
                    --- Crispy romano-crusted; white wine lemon caper sauce{" "}
                    <span> 28</span>{" "}
                  </span>
                </p>
                <p>
                  Salmon Caesar Salad*{" "}
                  <span className="priceDetails">
                    --- <span>32</span>{" "}
                  </span>
                </p>
                <p>
                  Petite Filet Mignon* 6oz{" "}
                  <span className="priceDetails">
                    --- <span>39</span>{" "}
                  </span>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card data-aos="zoom-in" className="cardBackground">
            <Card.Body className="cardBackground">
              <Card.Title className="cardTitle">SIDES</Card.Title>
              <Card.Text className="menuItems">
                <p>
                  Sautéed Asparagus, E.V.O.O., parmesan{" "}
                  <span className="priceDetails">
                    --- <span>13</span>
                  </span>
                </p>

                <p>
                  Roasted Brussels Sprouts, bacon marmalade{" "}
                  <span className="priceDetails">
                    ---
                    <span>14</span>
                  </span>
                </p>
                <p>
                  Sautéed Spinach & Mushrooms{" "}
                  <span className="priceDetails">
                    --- <span>13</span>{" "}
                  </span>
                </p>
                <p>
                  Lobster Mac & Cheese{" "}
                  <span className="priceDetails">
                    --- <span>24</span>{" "}
                  </span>
                </p>
                <p>
                  Roasted Garlic Whipped Potatoes{" "}
                  <span className="priceDetails">
                    --- <span>12</span>{" "}
                  </span>
                </p>
                <p>
                  Potatoes Gruyère Gratin{" "}
                  <span className="priceDetails">
                    --- <span>13</span>{" "}
                  </span>
                </p>
                <p>
                  French Fries{" "}
                  <span className="priceDetails">
                    --- <span>10</span>{" "}
                  </span>
                </p>
                <p>
                  Sautéed Mushrooms{" "}
                  <span className="priceDetails">
                    --- <span>13</span>{" "}
                  </span>
                </p>
                <p>
                  Roasted Creamed Corn Pancetta{" "}
                  <span className="priceDetails">
                    --- <span>13</span>{" "}
                  </span>
                </p>
                <p>
                  One Pound Baked Idaho Potato{" "}
                  <span className="priceDetails">
                    --- <span>10</span>{" "}
                  </span>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card data-aos="zoom-in" className="cardBackground" id="bottomCards">
            <Card.Body className="cardBackground" id="bottomCards">
              <Card.Title className="cardTitle">Add Ons</Card.Title>
              <Card.Text className="menuItems">
                <p>
                  Roasted Cloves of Garlic & Mushrooms{" "}
                  <span className="priceDetails">
                    --- <span>6</span>
                  </span>
                </p>

                <p>
                  Jumbo Crab, Asparagus, Béarnaise{" "}
                  <span className="priceDetails">
                    ---
                    <span>14</span>
                  </span>
                </p>
                <p>
                  Petite Lobster Tail 4oz{" "}
                  <span className="priceDetails">
                    --- <span>19</span>{" "}
                  </span>
                </p>
                <p>
                  Horseradish Sauce{" "}
                  <span className="priceDetails">
                    --- <span>5</span>{" "}
                  </span>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card data-aos="zoom-in" className="cardBackground" id="bottomCards">
            <Card.Body className="cardBackground" id="bottomCards">
              <Card.Title className="cardTitle">Sauces</Card.Title>
              <Card.Text className="menuItems">
                <p>
                  Béarnaise Sauce{" "}
                  <span className="priceDetails">
                    --- <span>5</span>
                  </span>
                </p>

                <p>
                  Roasted Shallot Cabernet Sauce{" "}
                  <span className="priceDetails">
                    ---
                    <span>5</span>
                  </span>
                </p>
                <p>
                  Cognac Peppercorn Bordelaise{" "}
                  <span className="priceDetails">
                    --- <span>5</span>{" "}
                  </span>
                </p>
                <p>
                  Horseradish Sauce{" "}
                  <span className="priceDetails">
                    --- <span>5</span>{" "}
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

export default INDIANAPOLIS;
