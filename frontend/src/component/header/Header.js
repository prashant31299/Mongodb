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
import { Link } from 'react-router-dom'

export default function Header() {
  return (
<Navbar bg="primary" expand="lg" variant='dark'>
  <Container >
    <Navbar.Brand >
        <Link to='/'>
        Navbar scroll
            </Link>
        </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
        <Nav className='m-auto'>
    <Form className="">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
      </Form>
      </Nav>
      <Nav
        className="mr-auto"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/">
            <Link to='/MyNotes'>
            MY Notes
            </Link>
            </Nav.Link>
        <NavDropdown ttle="prashant chavan" id="navbarScrollingDropdown">
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
