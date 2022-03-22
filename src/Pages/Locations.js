import React from "react";
import Header from "../components/Header";
import { Card, Container, CardGroup, Button } from "react-bootstrap";
const Locations = () => {
  return (
    <div>
      <Header />
      <Container fluid className="Locations">
        <div className="locationscontain">
          <h1>Now eleven Restarunts throughout the United States!</h1>
          <CardGroup>
            <Card data-aos="flip-left" className="locations-card">
              <Card.Body>
                <Card.Title>Sarasota, FL</Card.Title>
                <Card.Text>Dine-in • Carryout • Curbside • Delivery</Card.Text>
                <br />
                <Button
                  className="LocationsBtn"
                  href="https://www.opentable.com/restref/client/?restref=1046767&lang=en-US&ot_source=Restaurant%20website&corrid=60551358-2812-4738-8e41-d1605a62d1ec"
                  target="_blank"
                >
                  Open Table
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.opentable.com/restaurant/takeout/1046767?lang=en-US&widget=true&corrid=4019f25e-cec3-4191-b2c2-cc6e7cc00146"
                  target="_blank"
                >
                  Take Out
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.ubereats.com/store/hyde-park-prime-steakhouse-downtown-sarasota/ndZsJH36QvuYNNB0gfBmcQ"
                  target="_blank"
                >
                  Uber Eats
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.grubhub.com/restaurant/hyde-park-prime-steakhouse-35-s-lemon-ave-sarasota/2193204"
                  target="_blank"
                >
                  GrubHub
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.doordash.com/store/hyde-park-prime-steakhouse-sarasota-900759/"
                  target="_blank"
                >
                  DoorDash
                </Button>
              </Card.Body>
              <Button className="locations-bottom-button" href="/SARASOTA">
                View our menu!
              </Button>
            </Card>

            <Card data-aos="flip-right" className="locations-card">
              <Card.Body>
                <Card.Title>Dublin, OH</Card.Title>
                <Card.Text>Dine-in • Carryout • Curbside • Delivery</Card.Text>
                <br />
                <Button
                  className="LocationsBtn"
                  href="https://www.opentable.com/restref/client/?restref=1049620&lang=en-US&ot_source=Restaurant%20website&corrid=06fab4b9-b985-4443-8e6e-cb65badee167"
                >
                  Open Table
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.opentable.com/restaurant/takeout/1049620?lang=en-US&widget=true&corrid=5a0060df-2df9-4a4e-a6c8-0505e04a1f15"
                  target="_blank"
                >
                  Take Out
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.ubereats.com/store/hyde-park-prime-steakhouse-dublin/9CIm8eFgT8yEjRkexh-t_A"
                  target="_blank"
                >
                  Uber Eats
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.grubhub.com/restaurant/hyde-park-prime-steakhouse-26300-chagrin-blvd-beachwood/2185249"
                  target="_blank"
                >
                  GrubHub
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.doordash.com/store/hyde-park-prime-steakhouse-dublin-943146/1375786/?preview=1"
                  target="_blank"
                >
                  DoorDash
                </Button>
              </Card.Body>
              <Button className="locations-bottom-button" href="/COLUMBUSDUBLIN">
                View our menu!
              </Button>
            </Card>
          </CardGroup>
          <CardGroup>
            <Card data-aos="flip-right" className="locations-card">
              <Card.Body>
                <Card.Title>Birmingham, MI</Card.Title>
                <Card.Text>Dine-in • Carryout • Curbside • Delivery</Card.Text>
                <br />
                <Button
                  className="LocationsBtn"
                  href="https://www.opentable.com/restref/client/?restref=1047937&lang=en-US&ot_source=Restaurant%20website&corrid=a5a58248-7b3b-4eb9-a0b4-dd2a2dcc839a"
                  target="_blank"
                >
                  Open Table
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.opentable.com/restaurant/takeout/1047937?lang=en-US&widget=true&corrid=0bc97e15-6da1-4547-8f63-416d6e3e8bb0"
                  target="_blank"
                >
                  Take Out
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.ubereats.com/store/hyde-park-prime-steakhouse-birmingham/6JVYCeo_TPGlM81WXKZsyw"
                  target="_blank"
                >
                  Uber Eats
                </Button>
                <Button
                  className="LocationsBtn" 
                  href="https://www.grubhub.com/restaurant/hyde-park-prime-steakhouse-201-south-old-woodward-ave-birmingham/2192808"

                  target="_blank"
                >
                  GrubHub
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.doordash.com/store/hyde-park-prime-steakhouse-birmingham-769311/1374275/?preview=1"
                  target="_blank"
                >
                  DoorDash
                </Button>
              </Card.Body>
              <Button className="locations-bottom-button" href="/DETROITBIRMINGHAM">
                View our menu!
              </Button>
            </Card>

            <Card data-aos="flip-left" className="locations-card">
              <Card.Body>
                <Card.Title>Beachwood, OH</Card.Title>
                <Card.Text>Dine-in • Carryout • Curbside • Delivery</Card.Text>
                <br />
                <Button
                  className="LocationsBtn"
                  href="https://www.opentable.com/restref/client/?restref=274231&lang=en-US&ot_source=Restaurant%20website&corrid=ea01b0cc-0a58-4572-9326-e05458837432"
                  target="_blank"
                >
                  Open Table
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.opentable.com/restaurant/takeout/274231?lang=en-US&widget=true&corrid=816a1429-ee59-41d1-829a-f84f9632b953"
                  target="_blank"
                >
                  Take Out
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.ubereats.com/store/hyde-park-prime-steakhouse-beachwood/UUd9-WRNRsmalPLRp5Wt9A"
                  target="_blank"
                >
                  Uber Eats
                </Button>
                <Button className="LocationsBtn" href="https://www.grubhub.com/restaurant/hyde-park-prime-steakhouse-26300-chagrin-blvd-beachwood/2185249">
                  GrubHub
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.doordash.com/store/hyde-park-prime-steakhouse-beachwood-943751/1375539/?preview=1"
                  target="_blank"
                >
                  DoorDash
                </Button>
              </Card.Body>
              <Button
                className="locations-bottom-button"
                href="/CLEVELANDBEACHWOOD"
                target="_blank"
              >
                View our menu!
              </Button>
            </Card>
          </CardGroup>
          <CardGroup>
            <Card data-aos="flip-right" className="locations-card">
              <Card.Body>
                <Card.Title>Upper Arlington, OH</Card.Title>
                <Card.Text>Dine-in • Carryout • Curbside • Delivery</Card.Text>
                <br />
                <Button
                  className="LocationsBtn"
                  href="https://www.opentable.com/restref/client/?restref=1049617&lang=en-US&ot_source=Restaurant%20website&corrid=fa368550-910e-4ccb-baa0-2589185df507"
                  target="_blank"
                >
                  Open Table
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.opentable.com/restaurant/takeout/1049617?lang=en-US&widget=true&corrid=d8ff8277-7479-4cf6-aa89-3595040a47ef"
                  target="_blank"
                >
                  Take Out
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.ubereats.com/store/hyde-park-prime-steakhouse-upper-arlington/s0SU5vC4Qe2MLRCxIy3oow"
                  target="_blank"
                >
                  Uber Eats
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.grubhub.com/restaurant/hyde-park-prime-steakhouse-1615-old-henderson-rd-columbus/2192714"
                  target="_blank"
                >
                  GrubHub
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.doordash.com/store/hyde-park-prime-steakhouse-upper-arlington-944829/1376692/en-US/?preview=1"
                  target="_blank"
                >
                  DoorDash
                </Button>
              </Card.Body>
              <Button className="locations-bottom-button" href="/UPPERARLINGTONCOLUMBUS">
                View our menu!
              </Button>
            </Card>

            <Card data-aos="flip-left" className="locations-card">
              <Card.Body>
                <Card.Title>Downtown Columbus, OH</Card.Title>
                <Card.Text>Dine-in • Carryout • Curbside • Delivery</Card.Text>
                <br />
                <Button
                  className="LocationsBtn"
                  href="https://www.opentable.com/restref/client/?restref=275590&lang=en-US&ot_source=Restaurant%20website&corrid=c1134cf6-5096-48ce-889a-e30d575e2cb8"
                  target="_blank"
                >
                  Open Table
                </Button>
                <Button
                  className="LocationsBtn"
                  href="/privateDining"
                  target="_blank"
                >
                  Take Out
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.opentable.com/restaurant/takeout/275590?lang=en-US&widget=true&corrid=08455b62-58e0-4c71-92a2-163098ec1ae3"
                  target="_blank"
                >
                  Uber Eats
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.ubereats.com/store/hyde-park-prime-steakhouse-downtown-columbus/p71oRbBhRIC1Hen9a1p8bg"
                  target="_blank"
                >
                  GrubHub
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.doordash.com/store/hyde-park-prime-steakhouse-columbus-943344/1374697/?preview=1"
                  target="_blank"
                >
                  DoorDash
                </Button>
              </Card.Body>
              <Button
                className="locations-bottom-button"
                href="/DOWNTOWNCOLUMBUS"
                target="_blank"
              >
                View our menu!
              </Button>
            </Card>
          </CardGroup>
          <CardGroup>
            <Card data-aos="flip-right" className="locations-card">
              <Card.Body>
                <Card.Title>Northville, MI</Card.Title>
                <Card.Text>Dine-in • Carryout • Curbside • Delivery</Card.Text>
                <br />
                <Button
                  className="LocationsBtn"
                  href="https://www.opentable.com/restref/client/?restref=1047943&lang=en-US&ot_source=Restaurant%20website&corrid=420e4d99-8db5-4448-b949-a762e7bace30"
                  target="_blank"
                >
                  Open Table
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.opentable.com/restaurant/takeout/1047943?lang=en-US&widget=true&corrid=f52ce820-99b3-4beb-a7e9-45bdca7a1f2b"
                  target="_blank"
                >
                  Take Out
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.ubereats.com/store/hyde-park-prime-steakhouse-northville-michigan/b8DuQ4AFRsa2lS2TnwcUQA"
                  target="_blank"
                >
                  Uber Eats
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.grubhub.com/restaurant/hyde-park-prime-steakhouse-17107-haggerty-rd-northville/2193203"
                  target="_blank"
                >
                  GrubHub
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.doordash.com/store/hyde-park-prime-steakhouse-northville-943191/1374473/?preview=1"
                  target="_blank"
                >
                  DoorDash
                </Button>
              </Card.Body>
              <Button
                className="locations-bottom-button"
                href="/DETROITNORTHVILLE"
                target="_blank"
              >
                View our menu!
              </Button>
            </Card>

            <Card data-aos="flip-right" className="locations-card">
              <Card.Body>
                <Card.Title>Daytona Beach, FL</Card.Title>
                <Card.Text>Dine-in • Carryout • Curbside • Delivery</Card.Text>
                <br />
                <Button
                  className="LocationsBtn"
                  href="https://www.opentable.com/restref/client/?restref=1046812&lang=en-US&ot_source=Restaurant%20website&corrid=d1fe8b00-42f9-4c8d-ae7d-0b37944acae3"
                  target="_blank"
                >
                  Open Table
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.opentable.com/restaurant/takeout/1046812?lang=en-US&widget=true&corrid=45443160-19ac-43f1-b1ce-3fe123f567d0"
                  target="_blank"
                >
                  Take Out
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.ubereats.com/store/hyde-park-prime-steakhouse-daytona-beach-fl/e2Q7vyChSua_CuyZSG8IxA"
                  target="_blank"
                >
                  Uber Eats
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.grubhub.com/restaurant/hyde-park-prime-steakhouse-100-n-atlantic-ave-daytona-beach/2192807"
                  target="_blank"
                >
                  GrubHub
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.doordash.com/store/hyde-park-prime-steakhouse-daytona-beach-900741/1398941/?preview=1"
                  target="_blank"
                >
                  DoorDash
                </Button>
              </Card.Body>
              <Button
                className="locations-bottom-button"
                href="/DaytonaMenu"
                target="_blank"
              >
                View our menu!
              </Button>
            </Card>
          </CardGroup>
          <CardGroup>
            <Card data-aos="flip-left" className="locations-card">
              <Card.Body>
                <Card.Title>Westlake, OH</Card.Title>
                <Card.Text>Dine-in • Carryout • Curbside • Delivery</Card.Text>
                <br />
                <Button
                  className="LocationsBtn"
                  href="https://www.opentable.com/restref/client/?restref=1047934&lang=en-US&ot_source=Restaurant%20website&corrid=3095e68d-5e99-4f51-b665-0ad138aa0325"
                  target="_blank"
                >
                  Open Table
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.opentable.com/restaurant/takeout/1047934?lang=en-US&widget=true&corrid=fa221f36-8661-4627-93ec-6fa84d3e800a"
                  target="_blank"
                >
                  Take Out
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.ubereats.com/store/hyde-park-prime-steakhouse-westlake/5DNo4i34S4aN6hVVa5AXfg"
                  target="_blank"
                >
                  Uber Eats
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.grubhub.com/restaurant/hyde-park-prime-steakhouse-17107-haggerty-rd-northville/2193203"
                  target="_blank"
                >
                  GrubHub
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.doordash.com/store/hyde-park-prime-steakhouse-westlake-943132/1374553/?preview=1"
                  target="_blank"
                >
                  DoorDash
                </Button>
              </Card.Body>
              <Button
                className="locations-bottom-button"
                href="/CLEVELANDWESTLAKE"
                target="_blank"
              >
                View our menu!
              </Button>
            </Card>

            <Card data-aos="flip-right" className="locations-card">
              <Card.Body>
                <Card.Title>Pittsburgh, PA</Card.Title>
                <Card.Text>Dine-in • Carryout • Curbside • Delivery</Card.Text>
                <br />
                <Button
                  className="LocationsBtn"
                  href="https://www.opentable.com/restref/client/?restref=1047940&lang=en-US&ot_source=Restaurant%20website&corrid=93ee2586-3786-465a-91b0-2412722cc29d"
                  target="_blank"
                >
                  Open Table
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.opentable.com/restaurant/takeout/1047940?lang=en-US&widget=true&corrid=f6476c17-7a87-4507-8e78-a44341b58c67"
                  target="_blank"
                >
                  Take Out
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.ubereats.com/store/hyde-park-prime-steakhouse-downtown-pittsburgh/a4JYvi8ZRDKM36TGa2fsxg?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjI1JTIwTWFpbiUyMFN0JTIyJTJDJTIycmVmZXJlbmNlJTIyJTNBJTIyQ2hJSm5iOHZJU0NTTUlnUlpmWjFhR29ZX2dFJTIyJTJDJTIycmVmZXJlbmNlVHlwZSUyMiUzQSUyMmdvb2dsZV9wbGFjZXMlMjIlMkMlMjJsYXRpdHVkZSUyMiUzQTQxLjQ2MDIzMzM1OTMxMDIxNiUyQyUyMmxvbmdpdHVkZSUyMiUzQS04MS45NTIyNzE5MTEyNzAzNyU3RA%3D%3D"
                  target="_blank"
                >
                  Uber Eats
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.grubhub.com/restaurant/hyde-park-prime-steakhouse-247-n-shore-dr-pittsburgh/2193011"
                  target="_blank"
                >
                  GrubHub
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.doordash.com/store/hyde-park-prime-steakhouse-pittsburgh-943173/"
                  target="_blank"
                >
                  DoorDash
                </Button>
              </Card.Body>
              <Button
                className="locations-bottom-button"
                href="/PITTSBURGH"
                target="_blank"
              >
                View our menu!
              </Button>
            </Card>
          </CardGroup>
          <CardGroup>
            <Card
              data-aos="flip-left"
              className="locations-card"
              id="bottom-location"
            >
              <Card.Body>
                <Card.Title>Indianapolis, IN</Card.Title>
                <Card.Text>Dine-in • Carryout • Curbside • Delivery</Card.Text>
                <Button
                  className="LocationsBtn"
                  href="https://www.opentable.com/restaurant/takeout/1041568"
                  target="_blank"
                >
                  Open Table
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.opentable.com/restaurant/takeout/1041568?lang=en-US&widget=true&corrid=b91ccbb7-fc1a-441b-b045-50bce72b988f"
                  target="_blank"
                >
                  Take Out
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.ubereats.com/store/hyde-park-prime-steakhouse-downtown-indianapolis/7RyIUsgcQDGjo9ul61B1Gg?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjI1JTIwTWFpbiUyMFN0JTIyJTJDJTIycmVmZXJlbmNlJTIyJTNBJTIyQ2hJSm5iOHZJU0NTTUlnUlpmWjFhR29ZX2dFJTIyJTJDJTIycmVmZXJlbmNlVHlwZSUyMiUzQSUyMmdvb2dsZV9wbGFjZXMlMjIlMkMlMjJsYXRpdHVkZSUyMiUzQTQxLjQ2MDIzMzM1OTMxMDIxNiUyQyUyMmxvbmdpdHVkZSUyMiUzQS04MS45NTIyNzE5MTEyNzAzNyU3RA%3D%3D&utm_source=menu-maker"
                  target="_blank"
                >
                  Uber Eats
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.grubhub.com/restaurant/hyde-park-prime-steakhouse-51-n-illinois-st-indianapolis/2991899?classicAffiliateId=%2Fr%2Fw%2F2991899%2Frestaurant%2F2991899"
                  target="_blank"
                >
                  GrubHub
                </Button>
                <Button
                  className="LocationsBtn"
                  href="https://www.doordash.com/store/hyde-park-prime-steakhouse-indianapolis-806832/2505233/?preview=1"
                  target="_blank"
                >
                  DoorDash
                </Button>
              </Card.Body>
              <Button
                className="locations-bottom-button"
                href="/PITTSBURGH"
                target="_blank"
              >
                View our menu!
              </Button>
            </Card>
          </CardGroup>
        </div>
      </Container>
    </div>
  );
};
export default Locations;
