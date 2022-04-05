import React from 'react'

import{
     Button,
     Form,
     FormControl,
     Nav,
    Navbar,
    NavDropdown,
    Container
 } from "react-bootstrap"

export default function Header() {
  return (
<Navbar bg="primary" expand="lg" variant='dark'>
  <Container >
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
        <nav className='m-auto'>
    <Form className="">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
      </Form>
      </nav>
      <Nav
        className="mr-auto"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/">MY Notes</Nav.Link>
        <NavDropdown title="prashant chavan" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
       
          <NavDropdown.Item href="#action5">
              Log out
          </NavDropdown.Item>
        </NavDropdown>
      
      </Nav>
  
    </Navbar.Collapse>
  </Container>
</Navbar> 
 )
}
