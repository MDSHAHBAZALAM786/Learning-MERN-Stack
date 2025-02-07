const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    res.send("Welcome to Express Js")
})
app.post('/about',(req,res)=>{
    res.send("I am sending data here")
})

app.listen(3000,()=>console.log("Server Started...."))