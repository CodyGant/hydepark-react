import React from "react";
import { Container, Button } from "react-bootstrap";
import Giftcard from "../assests/HydePark-Standard-Card-500x320.png";

function Giftcards() {
  return (
    <div>
      <Container fluid className="privateDining">
        <div className="privateFlex" data-aos="fade-down">
          <div className="privatetext">
            <h1>GIFT CARDS</h1>

            <img
              data-aos="fade-right"
              className="giftCardImage"
              src={Giftcard}
              alt="building"
            />
            <h2>
              A Hyde Park Group Gift Card is the Gift of a Memorable Experience
              For All Celebrations, Big or Small, a Hyde a Park Group Gift Card
              is the Perfect Gift.
            </h2>

            <p>Traditional and E-Gift Options Avalible</p>

            <p>Accepted at all Hyde park group Reastaurants</p>

            <div class="gift-up-target" data-site-id="3fc1572a-721d-464f-1200-08da076b1864" data-platform="Other" ></div>

            
            
            
            
          </div>
        </div>
      </Container>
      
    </div>
  );
}

export default Giftcards;
