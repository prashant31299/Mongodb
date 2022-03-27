const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/ecom',{ useNewUrlParser: true })
.then(()=>console.log('connection successful...'))
.catch((err)=>console.log(err));


// this is our schema 
const playlistSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    ctype : String,
    videos:Number,
    author:String,
    active:Boolean,
    date :{
        type:Date,
        default:Date.now
    }  
})

// mongoose Model is wrapper on mongoose schema
// collection creation

const Playlist= new mongoose.model("Playlist",playlistSchema)

// create document or insert 

const createDoc=async()=>{
    try{
        const reactPlaylist = new Playlist({
            name:"react js ",
            ctype : 'back End',
            videos:30,
            author:"prashant chavna",
            active:true,
            
        })
        const jsPlaylist = new Playlist({
            name:" js ",
            ctype : 'front End',
            videos:30,
            author:"prashant chavna",
            active:true,
            
        })
        const expressPlaylist = new Playlist({
            name:"express js ",
            ctype : 'back End',
            videos:30,
            author:"prashant chavna",
            active:true,
            
        })
        const mongoPlaylist = new Playlist({
            name:"mongodb  ",
            ctype : 'back End',
            videos:30,
            author:"prashant chavna",
            active:true,
            
        })
            const result= await Playlist.insertMany([jsPlaylist,reactPlaylist,expressPlaylist,mongoPlaylist])
            console.log(result);
    }catch(err){
        console.log(err);
    }
}
// reactPlaylist.save()
createDoc();