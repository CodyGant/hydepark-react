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
      <h3>
        CALL US <a href="/">(317) 536-0270</a>
      </h3>

      <Button className="menupagebutton" href="/DETROITBIRMINGHAMBAR">
        HAPPY HOUR MENU
      </Button>
      <Button className="menupagebutton" href="/DETROITBIRMINGHAMEARLY">
        EARLY NIGHTS MENU
      </Button>
      <Button className="menupagebutton" href="/DETROITBIRMINGHAMBUTCHER">
        BUTCHER GRILLE MENU
      </Button>
      <Button className="menupagebutton" href="/DETROITBIRMINGHAMFAMILY">
        FAMAILY TO GO MENU
      </Button>
      <Container className="menulanding">
        <h1 className="menuName">DINNER MENU</h1>

        <CardGroup>
          <Card data-aos="zoom-in" className="cardBackground">
            <Card.Body className="cardBackground">
              <Card.Title className="cardTitle">
                THE ART OF THE STEAK BOUTIQUE FARMS*
              </Card.Title>
              <Card.Text className="menuItems">
                <p>
                  Australian Wagyu Filet Mignon 8oz{" "}
                  <span className="priceDetails">
                    --- Ranger Valley Farms <span>( $69 )</span>
                  </span>
                </p>

                <p>
                  The Myles Tuner Steak 22oz{" "}
                  <span className="priceDetails">
                    --- Porterhouse, Filet & Strip in one, 21-Day Dry Aged, 100%
                    Black Angus, Creekstone Farms <span> ( $ 71 )</span>
                  </span>
                </p>
                <p>
                  Steak Andretti 40oz{" "}
                  <span className="priceDetails">
                    --- Long Bone Tomahawk Ribeye, 100% Black Angus, Creekstone
                    Farm <span> ( $114 )</span>
                  </span>
                </p>

                <p>
                  Australan Lamb Chops 14oz{" "}
                  <span className="priceDetails">
                    --- Free-Range, All Natural Victoria, South Australia
                    <span>( $69 )</span>
                  </span>
                </p>

                <p>
                  Filet Mignon 6oz/8oz/12oz{" "}
                  <span className="priceDetails">
                    --- center cut <span> ( $39/47/60 )</span>
                  </span>
                </p>
                <p>
                  Ribeye 16oz{" "}
                  <span className="priceDetails">
                    --- heavily marbled <span> ( $57 )</span>
                  </span>
                </p>

                <p>
                  New York Strip 14oz{" "}
                  <span className="priceDetails">
                    --- <span>( $53 )</span>
                  </span>
                </p>

                <p>
                  Steak Hinchcliffe 22oz{" "}
                  <span className="priceDetails">
                    --- Bone-In Ribeye, heavily marbled <span> ( $65 )</span>
                  </span>
                </p>

                <p>
                  The Reggie Wayne Steak 8oz/12oz{" "}
                  <span className="priceDetails">
                    --- Filet Mignon, garlic, cracked black pepper, roasted
                    shallot Cabernet sauce <span> ( $51/64 )</span>
                  </span>
                </p>
                <p>
                  Steak Miller 8oz/12oz{" "}
                  <span className="priceDetails">
                    --- Filet Mignon over bordelaise crowned with asparagus,
                    lobster & bearnaise, wild mushrooms<span> ( $59/72 )</span>
                  </span>
                </p>
                <p>
                  JAPANESE 100% A-5+ BEEF{" "}
                  <span className="priceDetails">
                    --- Hyde Park’s Boutique Beef Program procures some of the
                    rarest and sought after beef from prefectures in Japan.
                    Availability is very limited. Prepared Rare to Medium Rare{" "}
                    <span> ( $ASK )</span>
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
              <Card.Title className="cardTitle">APPETIZERS COLD</Card.Title>
              <Card.Text className="menuItems">
                <p>
                  U-6 Shrimp Cocktail (3){" "}
                  <span className="priceDetails">
                    --- Cocktail Sauce, Additional shrimp $7 each{" "}
                    <span> ( $22 )</span>
                  </span>
                </p>

                <p>
                  Oysters on the Half Shell* (4){" "}
                  <span className="priceDetails">
                    --- Mignonette and cocktail sauce <span>( $15 )</span> - Add{" "}
                    <span>( $3.75 )</span> each
                  </span>
                </p>

                <p>
                  Jumbo Crab Cocktail{" "}
                  <span className="priceDetails">
                    --- Spicy mustard & cocktail sauce <span>( $22 )</span>
                  </span>
                </p>

                <p>
                  Chilled Lobster Tail Cocktail{" "}
                  <span className="priceDetails">
                    --- Cucumber lime jalapeno & classic cocktail sauces{" "}
                    <span>( $23 )</span>
                  </span>
                </p>

                <p>
                  Wagyu Beef Carpaccio*{" "}
                  <span className="priceDetails">
                    ---Chilled wagyu beef sliced razor thin{" "}
                    <span> ( $19 )</span>
                  </span>
                </p>

                <p>
                  Chilled Shellfish & Sushi Tower*{" "}
                  <span className="priceDetails">
                    --- Oysters, shrimp, King crab, lobster, spicy tuna rolls
                    serves 4-6 <span> ( $145 )</span>
                  </span>
                </p>

               
              </Card.Text>
            </Card.Body>
          </Card>
          <Card data-aos="zoom-in" className="cardBackground">
            <Card.Body className="cardBackground">
              <Card.Title></Card.Title>
              <Card.Title className="cardTitle">APPETIZERS HOT</Card.Title>
              <Card.Text className="menuItems">
                <p>
                Duroc Thick Cut Bacon {" "}
                  <span className="priceDetails">
                    --- Bragg's cider vinegar glaze{" "}
                    <span> ( $18 )</span>
                  </span>
                </p>

                <p>
                Crispy Calamari* {" "}
                  <span className="priceDetails">
                    --- Thai sweet hot chili sauce, peppers, carrots, scallions, roasted cashews <span>( $18 )</span> 
                  </span>
                </p>

                <p>
                Crab Cake{" "}
                  <span className="priceDetails">
                    --- Red pepper aioli, spicy mustard sauce <span>( $22 )</span>
                  </span>
                </p>

                <p>
                Lobster "Escargot Styyle" {" "}
                  <span className="priceDetails">
                    --- Butter poached lobster, garlic parsley butter, crostini{" "}
                    <span>( $22 )</span>
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
                    --- Sherry poached lobster <span>( $15 )</span>
                  </span>
                </p>

                <p>
                  Caesar Salad{" "}
                  <span className="priceDetails">
                    --- Made to order garlic croutons, chopped anchovies upon
                    request <span> ( $12 )</span>
                  </span>
                </p>

                <p>
                  Classic Baked Onion Soup{" "}
                  <span className="priceDetails">
                    --- <span> ( $12 )</span>
                  </span>
                </p>

                <p>
                  Hyde Park Wedge{" "}
                  <span className="priceDetails">
                    --- Smoked bacon, candied pecans, heirloom tomatoes, blue
                    cheese dressing, port wine drizzle <span>( $13 )</span>
                  </span>
                </p>
                <p>
                  Double Chop Salad{" "}
                  <span className="priceDetails">
                    --- Crispy pancetta, hard egg, juliennned English cucumber,
                    heirloom tomatoes, red onion, celery, buttermilk ranch, aged
                    white cheddar, crispy onions <span> ( $14 )</span>
                  </span>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card data-aos="zoom-in" className="cardBackground">
            <Card.Body className="cardBackground">
              <Card.Title className="cardTitle">PRIME SEAFOOD</Card.Title>
              <Card.Text className="menuItems">
                <p>
                Surf & Turf*{" "}
                  <span className="priceDetails">
                    ---8oz Filet & Twin Lobster Tail, 12oz-14oz{" "}
                    <span>( $107 )</span>
                  </span>
                </p>

                <p>
                  Lobster Tail 12oz-14oz{" "}
                  <span className="priceDetails">
                    --- Butter Poached and baked
                    <span>( $69 )</span>
                  </span>
                </p>

                <p>
                  Blackboard Fresh Fish*{" "}
                  <span className="priceDetails">
                    --- Pan-seared; lemon crystal citrus sauce or soy
                    vinaigrette{" "}
                    <p>
                      Salmon Filet{" "}
                      <span className="priceDetails">
                        --- <span>( $38 )</span>
                        <p>
                          Chilean Sea Bass{" "}
                          <span className="priceDetails">
                            --- <span>( $47 )</span>
                          </span>
                        </p>
                        <p>
                        Chef's Feature  Mkt{" "}
                          <span className="priceDetails">
                            --- <span>( $ASK )</span>
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
              <Card.Title className="cardTitle">SASHIMI ROLLS</Card.Title>
              <Card.Text className="menuItems">
                <p>
                Ahi Tuna* {" "}
                  <span className="priceDetails">
                    --- Charred jalapeno relish, Japanese soy, wasabi furikake<span> ( $12 )</span>
                  </span>
                </p>

                <p>
                Salmon*{" "}
                  <span className="priceDetails">
                    --- Korean gochujang sauce, curly scallions
                    <span> ( $11 )</span>
                  </span>
                </p>

               
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card data-aos="zoom-in" className="cardBackground">
            <Card.Body className="cardBackground">
              <Card.Title className="cardTitle">SUSHI ROLLS</Card.Title>
              <Card.Text className="menuItems">
                <p>
                Spicy Tuna Roll*{" "}
                  <span className="priceDetails">
                    --- Tuna, cucumber, avocado, spicy mayo, tobiko wasabi crunch, unagi, curly scallions<span> ( $14 )</span>
                  </span>
                </p>

                <p>
                California Roll {" "}
                  <span className="priceDetails">
                    --- Cucumber, avocado, unagi, curly scallions, topped with spicy kani
                    <span> ( $12 )</span>
                  </span>
                </p>

                <p>
                Prime Lobster Roll{" "}
                  <span className="priceDetails">
                    --- Asparagus, crab, mango, avocado, spicy mayo, lobster salad, tobiko, unagi, sesame wrap
                    <span> ( $23 )</span>
                  </span>
                </p>
                <p>
                Shrimp Roll {" "}
                  <span className="priceDetails">
                    --- Tempura shrimp, avocado, cucumber, crab, furikake, wasabi peas, masago, spicy mayo
                    <span> ( $13 )</span>
                  </span>
                </p>
                <p>
                Rainbow Roll*{" "}
                  <span className="priceDetails">
                    --- Salmon, yellow tail, tuna, crab, poached lobster, avocado, unagi, mango jicama slaw
                    <span> ( $14 )</span>
                  </span>
                </p>
                <p>
                Veggie Roll{" "}
                  <span className="priceDetails">
                    --- Marinated portabella, asparagus, mango, avocado, roasted red pepper, crispy chili & Thai mango sauces
                    <span> ( $12 )</span>
                  </span>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card data-aos="zoom-in" className="cardBackground">
            <Card.Body className="cardBackground">
              <Card.Title className="cardTitle">LOCAL FAVORITES</Card.Title>
              <Card.Text className="menuItems">
                <p>
                  Dry Aged Cheeseburger* 9oz{" "}
                  <span className="priceDetails">
                    --- Fries or Onion Straws <span> ( $16 )</span>
                  </span>
                </p>

                <p>
                  Chicken Milanese*{" "}
                  <span className="priceDetails">
                    --- Crispy romano-crusted; white wine lemon caper sauce{" "}
                    <span> ( $24 )</span>{" "}
                  </span>
                </p>

                <p>
                Bourbon Burger* 9oz {" "}
                  <span className="priceDetails">
                    --- Dry aged, cheddar cheese, bourbon bacon marmalade, crispy onion straws, fries
                    <span> ( $17 )</span>
                  </span>
                </p>

                <p>
                Roasted Cauliflower Steak{" "}
                  <span className="priceDetails">
                    --- Sauteed spinach and garlic<span> ( $24 )</span>{" "}
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
        <Card data-aos="zoom-in" className="cardBackground" id="bottomCards">
            <Card.Body className="cardBackground" >
              <Card.Title className="cardTitle">MAC & CHEESE</Card.Title>
              <Card.Text className="menuItems">
                <p>
                Lobster{" "}
                  <span className="priceDetails">
                    --- Toasted breadcrumbs <span>( $22 )</span>
                  </span>
                </p>
                <p>
                Five Cheese{" "}
                  <span className="priceDetails">
                    --- Toasted breadcrumbs <span>( $12 )</span>
                  </span>
                </p>

                
              </Card.Text>
            </Card.Body>
          </Card>
          <Card data-aos="zoom-in" className="cardBackground" id="bottomCards">
            <Card.Body className="cardBackground" >
              <Card.Title className="cardTitle">MILLIONAIRES POTATOES</Card.Title>
              <Card.Text className="menuItems">
                <p>
                Stuffed baked potato twins{" "}
                  <span className="priceDetails">
                    ---  <span>( $17 )</span>
                  </span>
                </p>
                <p>
                Adam's Mark white cheddar{" "}
                  <span className="priceDetails">
                    --- black truffle   <span>( $17 )</span>
                  </span>
                </p>

                
              </Card.Text>
            </Card.Body>
          </Card>
          <Card data-aos="zoom-in" className="cardBackground" id="bottomCards">
            <Card.Body className="cardBackground" >
              <Card.Title className="cardTitle">MUSHROOMS</Card.Title>
              <Card.Text className="menuItems">
                <p>
                Seasonal Wild Mix{" "}
                  <span className="priceDetails">
                    ---  Fresh herb sherry butter <span>( $13 )</span>
                  </span>
                </p>
                <p>
                Domestic{" "}
                  <span className="priceDetails">
                    --- Fresh herb sherry butter   <span>( $11 )</span>
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
                    --- <span>( $13 )</span>
                  </span>
                </p>

                <p>
                Charred Broccoli{" "}
                  <span className="priceDetails">
                    ---  sliced, lemon & sweet onion <span>( $12 )</span>{" "}
                  </span>
                </p>
                <p>
                Roasted Brussels Sprouts{" "}
                  <span className="priceDetails">
                    --- bacon marmalade <span>( $13 )</span>{" "}
                  </span>
                </p>

                <p>
                Sautéed Spinach & Domestic Mushrooms{" "}
                  <span className="priceDetails">
                    --- 
                    <span>( $12 )</span>
                  </span>
                </p>

                <p>
                Duroc Thick Cut Bacon{" "}
                  <span className="priceDetails">
                    --- Bragg's cider vinegar glaze  <span>( $17 )</span>{" "}
                  </span>
                </p>

                <p>
                Fresh Shucked Roasted Grilled Corn{" "}
                  <span className="priceDetails">
                    --- lime  <span>( $12 )</span>{" "}
                  </span>
                </p>

                <p>
                Roasted Garlic Whipped Potatoes{" "}
                  <span className="priceDetails">
                    --- <span>( $11 )</span>{" "}
                  </span>
                </p>

                <p>
                One Pound Baked Idaho Potato{" "}
                  <span className="priceDetails">
                    --- <span>( $10 )</span>{" "}
                  </span>
                </p>

                <p>
                Potatoes Gruyère Gratin {" "}
                  <span className="priceDetails">
                    --- <span>( $13 )</span>{" "}
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
                Sauteed Domestic Mushrooms & Garlic {" "}
                  <span className="priceDetails">
                    --- <span>( $8 )</span>
                  </span>
                </p>

                <p>
                  Jumbo Crab, Asparagus, Béarnaise{" "}
                  <span className="priceDetails">
                    ---
                    <span>( $13 )</span>
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

export default INDIANAPOLIS;
