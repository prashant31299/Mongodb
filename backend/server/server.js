const express =require('express')
const notes = require('../data/notes')
const dotenv= require('dotenv')
const mongoose=require('mongoose')
const connectdb= require('../config/db')
const app =express()
dotenv.config()
connectdb()

const DB='mongodb+srv://prashant:Madhav@@007@cluster0.mm7yr.mongodb.net/mern_data?retryWrites=true&w=majority'

mongoose.connect(DB).then(()=>{
    console.log("connectioon success");
}).catch((err)=>{
    console.log(`Error connection Failed ${err}`);
})

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

  const PORT = process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`);
})