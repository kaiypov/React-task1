import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Footer from '../Footer/Footer';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
            <img className='logo' width="80" src='https://makers.courses/static/media/logo.0abbd97a.svg'/>
          <Navbar.Brand href="#home">Главная</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Контакты</Nav.Link>
            <Nav.Link href="#features">О нас</Nav.Link>
            <Nav.Link href="#pricing">Услуги</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Footer />
    
    </>
  );
}

export default ColorSchemesExample;