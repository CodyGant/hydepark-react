import React from 'react'
import { Navbar, Nav} from "react-bootstrap";


export default function Header() {
  return (
    <div data-aos="fade-down" data-aos-easing="linear"
    data-aos-duration="500" className = 'navbar'>
<Navbar collapseOnSelect expand="lg" bg="transparent" variant="light" sticky='top'>
    
    <Navbar.Brand href="/" className = "test">HYDE PARK<p>- PRIME STEAKHOUSE -</p></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        </Nav>
        <Nav>
       
          <Nav.Link className = 'navLink' href="/Locations" >Locations</Nav.Link>
          <Nav.Link className = 'navLink' href="/Menu">Menu</Nav.Link>
          <Nav.Link className = 'navLink' href='/Reservations'>Reservations</Nav.Link>
          <Nav.Link className = 'navLink' href="/privateDining">Private Dining</Nav.Link>
          <Nav.Link className = 'navLink' href="/giftcards">Gift Cards</Nav.Link>
          <Nav.Link className = 'navLink' href="/resume-and-contact">Happenings</Nav.Link>
          <Nav.Link className = 'navLink' href="/butcher">Butcher Grille Box</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    
  </Navbar>
  </div>
  )
}
