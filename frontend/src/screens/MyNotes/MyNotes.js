import React, { useEffect, useState } from 'react'
import { Accordion, Badge, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MainSceen from '../../component/MainSceen'
// import notes from '../../data/notes'
import axios from 'axios'
export default function MyNotes() {

  const [notes,setNotes]= useState([])

  const deletHandler=(id)=>{
    if (window.confirm('are you sure ?')){

    }
  };

  const  fetchNotes= async () =>{
    const data =await axios.get('/api/notes')
    // const data= await fetch('http://127.0.0.1:4000/api/notes')
    const res=await data
    setNotes(res.data)
    // console.log(res.data);
  }
console.log(notes);
  useEffect(()=>{
    fetchNotes()
  },[])
  return (

      <MainSceen title='welcome back prashant chavan'> 
    <Link to='/createnotes'>
      <Button style={{marginLeft:10,marginBottom:6}} size='lg'>
        create New Notes
      </Button>
      </Link>

          {notes.map((note)=>{
            return(
              <Accordion key={note._id}> 
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
