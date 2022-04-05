import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Footer() {
  return (
    <footer className='footer'>
       <Container>
           <Row>
            <Col className='text-center py-3'> Copyright & noteZipper</Col>
           </Row>
       </Container>
    </footer>
    )
}
