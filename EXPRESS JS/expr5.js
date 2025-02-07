const express=require('express')
const app=express()

const validator=(req,res,next)=>{
    if(!req.query.age){
        res.send("Age should be mentioned")
    }else if(req.query.age<18){
        res.send("Below age")
    }else{
        next()
    }
}

app.use(validator)

app.get('/',(req,res)=>{
    res.send("Home Page")
})

app.get('/about',(req,res)=>{
    res.send("About us Page")
})

app.get('/contact',(req,res)=>{
    res.send("Contact Page")
})

app.listen(3000,()=>console.log("Server Started...."))