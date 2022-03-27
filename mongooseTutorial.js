const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/student',{ useNewUrlParser: true })
.then(()=>console.log('connection successful...'))
.catch((err)=>console.log(err));

// const mongoose = require('mongoose')

// mongoose.connect('mongodb:localhost://27017/ecom',{ useNewUrlParser: true })
// .then(()=>console.log('connection successful...'))
// .catch((err)=>console.log(err));

const listSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        minlength:[5," 5 is min length"],
        maxlength:20
    },
    rollNo:Number,
    sport:{
        type:String,
        required:true,
        enum:['cricket','hockey','racing','boxing','MMA']
    },
    subject:String,
    class:String
}) 

// creating the collection

const StudentData= new mongoose.model('studentData',listSchema)

const docData=async ()=>{
    try{

        const bccaNew=new StudentData({
            name:"prashant chavan",
            rollNo:33,
            sport:"hockey",
            subject:"javascript",
            class:"2nd year"

        })

        const bccaN2022=new StudentData({
            name:"harsh ",
            rollNo:23,
            sport:'cricket',
            subject:"c++",
            class:"3nd year"

        })
        const result =await StudentData.insertMany([bccaNew,bccaN2022])
        console.log(result);
    }catch(err){
            console.log(err);
    }
}
docData()

const getDoc=async ()=>{

    const result = await StudentData.find()
    console.log(result);
}


const updateDoc=async(_id)=>{
    try{
        const result = await  StudentData.updateOne({_id},{
            $set:{
                subject:'Rust'
            }
        })
        console.log(result);
        
    }catch(err){
        console.log(err)
        
    }
}

// updateDoc('62401e0c234143fbdbbf7e23')

const deleteDoc=async (_id)=>{
    try{
    const result =await StudentData.deleteOne({_id})
    console.log(result);

    }catch(err){
        console.log(err);
    }
}
// deleteDoc('62401e0c234143fbdbbf7e24')
// getDoc()?