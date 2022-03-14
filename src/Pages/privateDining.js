import React from "react";
import { Container, Button } from "react-bootstrap";
function privateDining() {
  return (
    <div>
      <Container fluid className="privateDining">
        <div className="privateFlex" data-aos="fade-down">
          <div className="privatetext">
            <h1>Private Dining at Hyde Park Restaurants</h1>
            <p>
              Enjoy the privacy of our intimate and elegant dining rooms and
              featured tables. We place a major emphasis on our corporate
              customers and our private dining program. We know that if you have
              a great experience at a group function, you’ll likely return as
              our guest, with family and friends.
            </p>

            <span>
              Our philosophy is very simple…."create an experience for the
              group/dining guest, based on the highest quality of food, the same
              personalized service and fine-dining room ambience and atmosphere,
              expected at a restaurant of our caliber."
            </span>

            <span>
              We offer a variety of prix fixe menus with ample choices for your
              guests. We are also pleased to create a personalized “special”
              menu for your group.{" "}
            </span>
            <span>
              Our wine steward will be happy to assist you in selecting wine
              that will compliment and enhance the menu you have chosen.
            </span>
            <span>
              We offer a Variety of Prix Fixe Menus and Elegant Banquet
              Displays.
            </span>
            <p></p>
            <h2>Private Event Professionals</h2>
            <h4>
              To contact a Private Event Professional click the button and
              complete the form and we will contact you to answer all your
              questions.
            </h4>
             
            <Button className="privateButton" href="/privateContactus">
              CONTACT US
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default privateDining;
