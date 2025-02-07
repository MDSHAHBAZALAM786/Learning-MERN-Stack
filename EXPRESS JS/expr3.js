const express=require('express')
const app=express()
app.post('/',(req,res)=>{
    res.send({person:{
        fname:"Shahbaz",
        age:23,
        place:"Jehanabad"
    }})
})
app.get('/',(req,res)=>{
    res.send({person:{
        fname:"Nishant",
        age:20,
        place:"Delhi"
    }})
})
app.post('/about',(req,res)=>{
    res.send("I am sending data here")
})

app.listen(3000,()=>console.log("Server Started...."))