import React from 'react';
import Contents from './Contents.jsx';
import { Navbar, Nav,Button,Container,Row,Col}  from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/home">Home</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/page1">Page 1</Nav.Link>
          <Nav.Link href="/page2">Page 2</Nav.Link>
          <Nav.Link href="/page3">Page 3</Nav.Link>
        </Nav>
        <Button variant="outline-light">Log In</Button>
        <Button variant="outline-light">Sign Up</Button>

      </Navbar>)
}

function Footer() {
    return (
        <div style={{background:'#161e2c', color:'white', height:'200px'}}>
    
    <Container>
  <Row>
    <Col>Footer column 1 of 3</Col>
    <Col>Footer column 2 of 3</Col>
    <Col>Footer column 3 of 3</Col>
  </Row>
</Container>
      </div>)
}

export default function Page() {
    return (
        <div>
            <NavBar />
            <Contents />
            <Footer />
        </div>
    );
}