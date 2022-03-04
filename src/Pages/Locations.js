import React from 'react';
import Header from "../components/Header";
import {Button, Container} from "react-bootstrap";
const Locations = () => {
  return (
    <div>
    <Header/>
    <Container>
    <Button className="submitButton" variant='success' type="submit">
            Submit
        </Button>
        </Container>
    </div>
  );
};
export default Locations;