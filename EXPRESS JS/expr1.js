const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    res.send("Welcome to Express Js")
})
app.get('/about',(req,res)=>{
    res.send("About us page")
})

app.listen(3000,()=>console.log("Server Started...."))