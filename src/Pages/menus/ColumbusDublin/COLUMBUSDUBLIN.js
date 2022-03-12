import React from "react";

import logo from "../../../assests/hydepark.png";
import { Card, Container, CardGroup, Button } from "react-bootstrap";
function COLUMBUSDUBLIN() {
  return (
    <div className="menuPage">
      <img
        data-aos="fade-right"
        className="logoImage"
        src={logo}
        alt="building"
      />
      <p className="locationName">COLUMBUS DUBLIN</p>
      <h3>
        CALL US <a href="/">(614) 717-2828</a>
      </h3>

      <Button className="menupagebutton" href="/COLUMBUSDUBLINBAR">
        HAPPY HOUR MENU
      </Button>
      <Button className="menupagebutton" href="/COLUMBUSDUBLINEARLY">
        EARLY NIGHTS MENU
      </Button>
      <Button className="menupagebutton" href="/COLUMBUSDUBLINBUTCHER">
        BUTCHER GRILLE MENU
      </Button>
      <Button className="menupagebutton" href="/COLUMBUSDUBLINFAMILY">
        FAMAILY TO GO MENU
      </Button>
      <Container className="menulanding">
        <h1 className="menuName">DINNER MENU</h1>

        <CardGroup>
          <Card data-aos="zoom-in" className="cardBackground">
            <Card.Body className="cardBackground">
              <Card.Title className="cardTitle">STEAKS • CHOPS</Card.Title>
              <Card.Text className="menuItems">
                <p>
                  Filet Mignon 8oz/12oz{" "}
                  <span className="priceDetails">
                    --- center cut <span>( $46/58 )</span>
                  </span>
                </p>

                <p>
                  Double Cut Lamb Chops 14oz{" "}
                  <span className="priceDetails">
                    --- <span> ( $44 )</span>
                  </span>
                </p>

                <p>
                  The Ryan Day Steak 26oz{" "}
                  <span className="priceDetails">
                    --- 36 Day Dry Aged Bone-in Ribeye Heavily marbled, rich
                    beef flavor <span>( $76 )</span>
                  </span>
                </p>

                <p>
                  The Bobby Rahal Steak 16oz{" "}
                  <span className="priceDetails">
                    --- Ribeye, heavily marble <span> ( $49 )</span>
                  </span>
                </p>
                <p>
                  The Urban Meyer Steak 14oz{" "}
                  <span className="priceDetails">
                    --- New York Strip 44 <span> ( $44 )</span>
                  </span>
                </p>

                <p>
                  Steak Herbstreit 22oz{" "}
                  <span className="priceDetails">
                    --- Bone-In Ribeye, heavily marbled<span>( $51 )</span>
                  </span>
                </p>
                <p>
                  Australian Wagyu Filet Mignon 8oz{" "}
                  <span className="priceDetails">
                    --- Ranger Valley Farms<span>( $67 )</span>
                  </span>
                </p>

                <p>
                  Steak Woody 7oz{" "}
                  <span className="priceDetails">
                    --- Petite cuts of tenderloin wrapped in bacon, melted blue
                    cheese & bordelaise sauce <span> ( $34 )</span>
                  </span>
                </p>

                <p>
                  Steak Griffin 8oz/12oz{" "}
                  <span className="priceDetails">
                    --- Filet Mignon, garlic, cracked black pepper, roasted
                    shallot Cabernet sauce <span> ( $50/62 )</span>
                  </span>
                </p>
                <p>
                  Steak Tressel 14oz{" "}
                  <span className="priceDetails">
                    --- New York Strip topped with roasted cloves of garlic &
                    mushrooms <span> ( $49 )</span>
                  </span>
                </p>
                <p>
                  Steak Au Nicklaus 14oz{" "}
                  <span className="priceDetails">
                    --- Filet Mignon, cracked peppercorns & cognac bordelaise
                    (Spicy) <span> ( $49 )</span>
                  </span>
                </p>

                <p>
                  Steak Kosar 8oz/12oz{" "}
                  <span className="priceDetails">
                    --- A Filet Mignon over bordelaise crowned with asparagus,
                    lobster & bearnaise, sliced mushrooms
                    <span> ( $58/70 )</span>
                  </span>
                </p>

                <p>
                  The Scarlet & Gray Steak 40oz{" "}
                  <span className="priceDetails">
                    --- Long Bone Tomahawk Ribeye, 100% Black Angus, Creekstone
                    Farms <span> ( $114 )</span>
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
              <Card.Title className="cardTitle">RAW BAR • APPETIZER</Card.Title>
              <Card.Text className="menuItems">
                <p>
                  Jumbo Lump Crab Cocktail{" "}
                  <span className="priceDetails">
                    --- Spicy mustard, cocktail sauce <span> ( $19 )</span>
                  </span>
                </p>

                <p>
                  Wagyu Beef Carpaccio*{" "}
                  <span className="priceDetails">
                    --- Chilled wagyu beef sliced razor thin <span>( $17 )</span>
                  </span>
                </p>


                <p>
                  Shrimp Cocktail{" "}
                  <span className="priceDetails">
                    --- Cocktail sauce (3,5) <span>( $12/19 )</span>
                  </span>
                </p>

                <p>
                  Crab Cake{" "}
                  <span className="priceDetails">
                    --- Port wine reduction, garlic butter, toast points {" "}
                    <span>( $13 )</span>
                  </span>
                </p>

                <p>
                  Escargot{" "}
                  <span className="priceDetails">
                    --- Chilled wagyu beef sliced razor thin <span>( $19 )</span>
                  </span>
                </p>


                <p>
                  Chilled Lobster Tail Cocktail{" "}
                  <span className="priceDetails">
                    --- Spicy mustard & classic cocktail sauce{" "}
                    <span> ( $21 )</span>
                  </span>
                </p>

                
                <p>
                Oysters Rockefeller{" "}
                  <span className="priceDetails">
                    --- Spinach, melted provolone <span> ( $17 )</span>
                  </span>
                </p>

                <p>
                  Oysters on the Half Shell* (4){" "}
                  <span className="priceDetails">
                    --- <span> ( $14 )</span> - Add <span>( $3.50 )</span>{" "}
                    each
                  </span>
                </p>
                <p>
                  Ahi Tuna Tower*{" "}
                  <span className="priceDetails">
                    --- Avocado, wasabi soy lime dressing, wontons{" "}
                    <span> ( $18 )</span>
                  </span>
                </p>
                <p>
                  Crispy Calamari*{" "}
                  <span className="priceDetails">
                    --- Thai sweet hot chili sauce, peppers, carrots, scallions,
                    roasted cashews <span> ( $16 )</span>
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
              <Card.Title className="cardTitle">SOUPS • SALADS</Card.Title>
              <Card.Text className="menuItems">
                <p>
                  Lobster Bisque{" "}
                  <span className="priceDetails">
                    --- Sherry poached lobster <span>( $16 )</span>
                  </span>
                </p>

                <p>
                  Caesar Salad{" "}
                  <span className="priceDetails">
                    --- Made to order garlic croutons, chopped anchovies upon
                    request <span> ( $11 )</span>
                  </span>
                </p>

                <p>
                  Classic Baked Onion Soup{" "}
                  <span className="priceDetails">
                    --- <span> ( $11 )</span>
                  </span>
                </p>

                

                <p>
                  Hyde Park Wedge{" "}
                  <span className="priceDetails">
                    --- Smoked bacon, candied pecans, heirloom tomatoes, blue
                    cheese dressing, port wine drizzle <span>( $11 )</span>
                  </span>
                </p>
                <p>
                  Double Chop Salad{" "}
                  <span className="priceDetails">
                    --- Crispy pancetta, hard egg, juliennned English cucumber,
                    heirloom tomatoes, red onion, celery, buttermilk ranch, aged
                    white cheddar, crispy onions <span> ( $12 )</span>
                  </span>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card data-aos="zoom-in" className="cardBackground">
            <Card.Body className="cardBackground">
              <Card.Title className="cardTitle">SEAFOOD</Card.Title>
              <Card.Text className="menuItems">
                <p>
                  Surf & Turf*{" "}
                  <span className="priceDetails">
                    ---6oz Filet & Twin Lobster Tails, 4oz each{" "}
                    <span>( $72 )</span>
                  </span>
                </p>

                <p>
                  Lobster Tail 12oz-14oz{" "}
                  <span className="priceDetails">
                    ---
                    <span>( $72 )</span>
                  </span>
                </p>

                <p>
                  Blackboard Fresh Fish*{" "}
                  <span className="priceDetails">
                    ---Pan-seared; lemon crystal citrus sauce or soy vinaigrette{" "}
                    <p>
                      Salmon Filet{" "}
                      <span className="priceDetails">
                        --- <span>( $34 )</span>
                        <p>
                          Chilean Sea Bass{" "}
                          <span className="priceDetails">
                            --- <span>( $40 )</span>
                          </span>
                        </p>
                      </span>
                    </p>
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
                  Dry Aged Cheeseburger* 9oz{" "}
                  <span className="priceDetails">
                    --- Fries or Onion Straws <span> ( $14 )</span>
                  </span>
                </p>

                <p>
                  Chicken Milanese*{" "}
                  <span className="priceDetails">
                    --- Crispy romano-crusted; white wine lemon caper sauce{" "}
                    <span> ( $23 )</span>{" "}
                  </span>
                </p>

                <p>
                  Bacon Gruyère Dry Aged Burger* 9oz{" "}
                  <span className="priceDetails">
                    --- Fries or Onion Straws
                    <span> ( $15 )</span>
                  </span>
                </p>

                <p>
                  Salmon Caesar Salad*{" "}
                  <span className="priceDetails">
                    --- <span> ( $29 )</span>{" "}
                  </span>
                </p>
                <p>
                  Filet Mignon* 6oz{" "}
                  <span className="priceDetails">
                    --- <span>( $36 )</span>{" "}
                  </span>
                </p>
                
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card data-aos="zoom-in" className="cardBackground">
            <Card.Body className="cardBackground">
              <Card.Title className="cardTitle">DESSERT</Card.Title>
              <Card.Text className="menuItems">
                <p>
                  New York Style Cheesecake{" "}
                  <span className="priceDetails">
                    --- Graham Cracker Crust, Amarena Cherries, Chambord Cherry
                    Glaze <span> ( $10 )</span>
                  </span>
                </p>

                <p>
                  Colossal Carrot Cake{" "}
                  <span className="priceDetails">
                    --- Spice Cake with Raisins, Nuts, Pineapple, and Cream
                    Cheese Frosting, Caramel Sauce Serves 2-4
                    <span> ( $16.5 )</span>
                  </span>
                </p>

                <p>
                  Flourless Chocolate Torte{" "}
                  <span className="priceDetails">
                    --- Semi-sweet, Glazed with Dark Chocolate, Bailey's Creme
                    anglaise and Port Wine Reduction
                    <span> ( $10 )</span>
                  </span>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card data-aos="zoom-in" className="cardBackground">
            <Card.Body className="cardBackground" id="bottomCards">
              <Card.Title className="cardTitle">SIDES</Card.Title>
              <Card.Text className="menuItems">
                <p>
                  Sautéed Asparagus, E.V.O.O., parmesan{" "}
                  <span className="priceDetails">
                    --- <span>( $12 )</span>
                  </span>
                </p>

                <p>
                  Sautéed Spinach & Mushrooms{" "}
                  <span className="priceDetails">
                    --- <span>( $12 )</span>{" "}
                  </span>
                </p>
                <p>
                  Sautéed Mushrooms{" "}
                  <span className="priceDetails">
                    --- <span>( $12 )</span>{" "}
                  </span>
                </p>

                <p>
                  Roasted Brussels Sprouts{" "}
                  <span className="priceDetails">
                    --- bacon marmalade
                    <span>( $13 )</span>
                  </span>
                </p>

                <p>
                  Lobster Mac & Cheese{" "}
                  <span className="priceDetails">
                    --- <span>( $24 )</span>{" "}
                  </span>
                </p>

                <p>
                  Potatoes Gruyère Gratin{" "}
                  <span className="priceDetails">
                    --- <span>( $12 )</span>{" "}
                  </span>
                </p>

                <p>
                  Roasted Garlic Whipped Potatoes{" "}
                  <span className="priceDetails">
                    --- <span>( $11 )</span>{" "}
                  </span>
                </p>

                <p>
                  French Fries{" "}
                  <span className="priceDetails">
                    --- <span>( $9 )</span>{" "}
                  </span>
                </p>

                <p>
                  Roasted Creamed Corn Pancetta{" "}
                  <span className="priceDetails">
                    --- <span>( $12 )</span>{" "}
                  </span>
                </p>

                <p>
                  One Pound Baked Idaho Potato{" "}
                  <span className="priceDetails">
                    --- <span>( $9 )</span>{" "}
                  </span>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card data-aos="zoom-in" className="cardBackground" id="bottomCards">
            <Card.Body className="cardBackground" id="bottomCards">
              <Card.Title className="cardTitle">ADD ONS</Card.Title>
              <Card.Text className="menuItems">
                <p>
                  Roasted Cloves of Garlic & Mushrooms{" "}
                  <span className="priceDetails">
                    --- <span>( $6 )</span>
                  </span>
                </p>

                <p>
                Blue Cheese Crusted/Bordelaise{" "}
                  <span className="priceDetails">
                    --- <span>( $6 )</span>
                  </span>
                </p>

                <p>
                  Jumbo Crab, Asparagus, Béarnaise{" "}
                  <span className="priceDetails">
                    ---
                    <span>( $14 )</span>
                  </span>
                </p>
                <p>
                  Petite Lobster Tail 4oz{" "}
                  <span className="priceDetails">
                    --- <span>( $19 )</span>{" "}
                  </span>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card data-aos="zoom-in" className="cardBackground" id="bottomCards">
            <Card.Body className="cardBackground" id="bottomCards">
              <Card.Title className="cardTitle">SAUCES</Card.Title>
              <Card.Text className="menuItems">
                <p>
                  Béarnaise Sauce{" "}
                  <span className="priceDetails">
                    --- <span>( $5 )</span>
                  </span>
                </p>

                <p>
                  Cognac Peppercorn Bordelaise{" "}
                  <span className="priceDetails">
                    --- <span>( $5 )</span>{" "}
                  </span>
                </p>

                <p>
                  Horseradish Sauce{" "}
                  <span className="priceDetails">
                    --- <span>( $5 )</span>{" "}
                  </span>
                </p>

                <p>
                  Roasted Shallot Cabernet Sauce{" "}
                  <span className="priceDetails">
                    ---
                    <span>( $5 )</span>
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

export default COLUMBUSDUBLIN;
