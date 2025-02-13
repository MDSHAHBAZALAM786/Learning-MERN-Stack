const mongoose=require('mongoose')
const express=require('express')
const app=express()
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded())
const connectDB=async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/lpu')
        console.log('connected..')
    } catch (err) {
        console.log('error')
    }
}

connectDB()

const mySchema= new mongoose.Schema({
    name:String,
    place:String,
    age:Number
})

const myModel=new mongoose.model('col1',mySchema)

app.get('/',(req,res)=>{
    res.render('form')
})

app.post('/sign_up',(req,res)=>{
    const data=myModel(req.body)
    data.save()
    .then((res)=>console.log("Data inserted..."))
    .catch((err)=>console.log("Some error.."))
    res.render('show')
})
app.listen(3000,()=>{
    console.log("Server Started...")
})