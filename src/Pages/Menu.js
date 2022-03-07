import React from "react";
import { Container, Dropdown } from "react-bootstrap";
function Menu() {
  return (
    <div className="reservationsPage">
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
        </div>

        <Dropdown>
          <Dropdown.Toggle className="reserBtn">
            SELECT LOCATION
          </Dropdown.Toggle>

          <Dropdown.Menu className="dropDown">
            <Dropdown.Item
              href="https://www.opentable.com/restref/client/?restref=1047940&lang=en-US&ot_source=Restaurant%20website&corrid=6cfd975f-50f7-491b-8874-a0924bc1d605"
              target="_blank"
            >
              PITTSBURGH
            </Dropdown.Item>
            <Dropdown.Item
              href="https://www.opentable.com/restref/client/?restref=274231&lang=en-US&ot_source=Restaurant%20website&corrid=18a41fef-a2ac-4331-8b0f-907282efcc02"
              target="_blank"
            >
              CLEVELAND - Beachwood
            </Dropdown.Item>
            <Dropdown.Item
              href="https://www.opentable.com/restref/client/?restref=1047934&lang=en-US&ot_source=Restaurant%20website&corrid=b41d404b-b2c8-4f0c-b922-8ad78b42664d"
              target="_blank"
            >
              CLEVELAND - Westlake{" "}
            </Dropdown.Item>
            <Dropdown.Item
              href="https://www.opentable.com/restref/client/?restref=1049617&lang=en-US&ot_source=Restaurant%20website&corrid=fb99fe09-1177-4f51-a8a4-4bb0c29b50a4"
              target="_blank"
            >
              COLUMBUS - Upper Arlington
            </Dropdown.Item>
            <Dropdown.Item
              href="https://www.opentable.com/restref/client/?restref=1049620&lang=en-US&ot_source=Restaurant%20website&corrid=200fde14-9414-4ac3-b003-a43ed215b1c8"
              target="_blank"
            >
              COLUMBUS - Dublin{" "}
            </Dropdown.Item>
            <Dropdown.Item
              href="https://www.opentable.com/restref/client/?restref=275590&lang=en-US&ot_source=Restaurant%20website&corrid=cef039c2-a782-4b94-8d72-7e318b85493f"
              target="_blank"
            >
              COLUMBUS - Downtown
            </Dropdown.Item>
            <Dropdown.Item
              href="https://www.opentable.com/restref/client/?restref=1046812&lang=en-US&ot_source=Restaurant%20website&corrid=61a30799-e8d9-488a-b72a-aeda105db369"
              target="_blank"
            >
              DAYTONA BEACH
            </Dropdown.Item>
            <Dropdown.Item
              href="https://www.opentable.com/restref/client/?restref=1041568&lang=en-US&ot_source=Restaurant%20website&corrid=c2b02636-05cc-49eb-8e93-6586100eca46"
              target="_blank"
            >
              INDIANAPOLIS
            </Dropdown.Item>
            <Dropdown.Item
              href="https://www.opentable.com/restref/client/?restref=1046767&lang=en-US&corrid=4eeab60d-8cbf-4ee4-823a-cb719d7c57ab"
              target="_blank"
            >
              SARASOTA
            </Dropdown.Item>
            <Dropdown.Item
              href="https://www.opentable.com/restref/client/?restref=1047937&lang=en-US&ot_source=Restaurant%20website&corrid=56d4e630-0b59-485e-bd73-5378ffa4ede4"
              target="_blank"
            >
              DETROIT - Birmingham
            </Dropdown.Item>
            <Dropdown.Item
              href="https://www.opentable.com/restref/client/?restref=1047943&lang=en-US&ot_source=Restaurant%20website&corrid=5751435a-f694-4f5a-9c37-ab4b4d9c1628"
              target="_blank"
            >
              DETROIT - Northville
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </div>
  );
}
export default Menu;
