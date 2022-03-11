import React from "react";
import { Container, Dropdown } from "react-bootstrap";
function Menu() {
  return (
    <div className="selectmenupage">
      <Container className="Reservationlanding">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"
          class="row"
        >
          <h1>WE'RE ALL ABOUT THE FOOD</h1>
          <p>
            Fine Aged Steaks and Chops, Fresh Seafood and Creative Chef
            Specialties
          </p>

          <p>
            We believe that great food starts with the quality of the
            ingredients, finished with the flair of a professional culinarian.
            Take a closer look at our menus, and you'll find our menu doesn't
            begin and end with a New York strip steak or a filet mignon. Our
            chefs are experts in preparing the best available aged steaks in a
            variety of classic and noveau styles, including Steak ala Oscar,
            Steak au Poivre, and Tournedos au Bleu. Of course, we like to name
            them in honor of the local sports legends.
          </p>
          <p>
            There's nothing like a great steak. For those of you who like a nice
            piece of fish, we've got the best of that too! Our award-winning
            menus are more extensive, more creative, with a broader appeal than
            the typical steakhouses – check it out.
          </p>

          <Dropdown>
            <Dropdown.Toggle className="reserBtn">
              SELECT LOCATION
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropDown">
              <Dropdown.Item href="/PITTSBURGH">PITTSBURGH</Dropdown.Item>
              <Dropdown.Item href="CLEVELANDWestlake" target="_blank">
                CLEVELAND - Beachwood
              </Dropdown.Item>
              <Dropdown.Item href="/CLEVELANDWestlake" target="_blank">
                CLEVELAND - Westlake{" "}
              </Dropdown.Item>
              <Dropdown.Item href="/COLUMBUSUpperArlington" target="_blank">
                COLUMBUS - Upper Arlington
              </Dropdown.Item>
              <Dropdown.Item href="/COLUMBUSDublin" target="_blank">
                COLUMBUS - Dublin{" "}
              </Dropdown.Item>
              <Dropdown.Item href="/DowntownColumbus" target="_blank">
                COLUMBUS - Downtown
              </Dropdown.Item>
              <Dropdown.Item href="/DaytonaMenu" target="_blank">
                DAYTONA BEACH
              </Dropdown.Item>
              <Dropdown.Item href="/INDIANAPOLIS" target="_blank">
                INDIANAPOLIS
              </Dropdown.Item>
              <Dropdown.Item href="/SARASOTA" target="_blank">
                SARASOTA
              </Dropdown.Item>
              <Dropdown.Item href="/DETROITBirmingham" target="_blank">
                DETROIT - Birmingham
              </Dropdown.Item>
              <Dropdown.Item href="/DETROITNorthville" target="_blank">
                DETROIT - Northville
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    </div>
  );
}
export default Menu;
