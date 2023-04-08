
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navb = () => {
  return (
    <div className="nav">
      <Navbar bg="dark" variant="dark" style={{width:"100%"}} >
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
          <div style={{ display: "flex", gap: "20px" }}>
        <input className="nav-input" placeholder="search" />
        <button  class="button-17" style={{ height: "30px",background:'yellow',color:'black'}}>
          search
        </button>
      </div>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default Navb
