const express = require('express'); 
const app = express();  
const data=require('./data')

app.get('/', (req, res) => {
    res.send("Welcome to the Home Page!");
});

app.get('/product', (req, res) => {
    res.send(data);
});

app.get('/product/:id', (req, res) => {
    let result=data.find(x=>x.id==req.params.id)
    res.send(result)
});

app.listen(3000, () => console.log("Server started on port 3000..."));
