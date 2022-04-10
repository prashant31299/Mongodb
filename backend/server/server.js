const express =require('express')
const notes = require('../../frontend/src/data/notes')
const dotenv= require('dotenv')

const app =express()
dotenv.config()

app.get('/', (req,res)=>{
    res.send("Api is running ")
})

app.get('/api/notes',(req,res)=>{
    res.json(notes)
})
app.get('/api/notes/:id', (req, res) => {
    const note=notes.find((n)=>n._id===req.params.id)
    res.send(note)
    console.log(req.params);
  })

  const PORT = process.env.PORT || 5000;
app.listen(3000,()=>{
    console.log(`server started on port ${PORT}`);
})