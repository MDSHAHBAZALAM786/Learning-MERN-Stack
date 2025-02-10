const express=require('express')
const app=express()
const credential={
    email:"lpu@gmail.com",
    uid:"lpu"
}

app.get('/', (req, res) => {
    res.send("Welcome to the Home Page!");
});
app.get('/api/login/:email',(req,res)=>{
    if(credential.email==req.params.email){
        res.send("Authorised user")
    }else{
        res.send("Unauthorised user")
    }
})
app.listen(3000,()=>console.log("Server started"))