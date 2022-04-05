import React from 'react'
import { Button, Container,Row } from 'react-bootstrap'
// import { Container } from 'react-bootstrap'
import './Landingpage.css'
export default function Landingpage() {
  return ( 
      <div className='main'>

          <Container>
              <Row>
                <div className='intro-text'>
                    <h1 className=' title'> welcomet to note zipper</h1>
                    <p className='subtitle'>on safe place for all nots..</p>
                </div>
                <div className='buttonContainer'>
                    <a href='/login'>
                        <Button size='lg'
                         className='landingbutton'
                          >login</Button>
                    </a>
                    <a href='/register'>
                        <Button size='lg' 
                        className='landingbutton'
                        variant='outline-primary'
                         >Sign up</Button>
                    </a>
                </div>
              </Row>
          </Container>
      </div>
  )
}
