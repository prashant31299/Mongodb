import React from 'react'
import { Accordion, Badge, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MainSceen from '../../component/MainSceen'
import notes from '../../data/notes'
export default function MyNotes() {
  const deletHandler=(id)=>{
    if (window.confirm('are you sure ?')){

    }
  };
  return (
      <MainSceen title='welcome back prashant chavan'> 
    <Link to='/createnotes'>
      <Button style={{marginLeft:10,marginBottom:6}} size='lg'>
        create New Notes
      </Button>
      </Link>

          {notes.map((note)=>{
            return(
              <Accordion>
           <Accordion.Item >

      <Card style ={{margin:10}} key={note._id}>
        <Card.Header style={{
        display:'flex'
        
        }}>
          <span style={{
            color:"black",
            textDecoration:'none',
            flex:1,
            cursor:'pointer',
            alignSelf:'center',
            fontSize:"18"
          }} >
            <Accordion.Header > 
            {note.title}
            </Accordion.Header>
          TITLE
            </span>
          <div>
            <Button href={`/note/${note._id}`}> Edit</Button>
            <Button variant='danger' className='mx-2'onClick={()=>deletHandler(note._id)} >Edit</Button>
          </div>
        </Card.Header>
        <Accordion.Body eventKey="0">

        <Card.Body>
          <h4>
            <Badge variant="success">
              category -{note.category}
            </Badge>
          </h4>
    <blockquote className="blockquote mb-0">
      <p>
          {note.content}
      </p>
      <footer className="blockquote-footer">
        create on some date
        </footer>
    </blockquote>
  </Card.Body>
  </Accordion.Body>

      </Card>
      </Accordion.Item>

      </Accordion>
            )
    })}


      </MainSceen>
  )
}
