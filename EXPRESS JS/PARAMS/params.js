const express = require('express'); 
const app = express();  

app.get('/', (req, res) => {
    res.send("Welcome to the Home Page!");
});

app.get('/api:id', (req, res) => {
    res.send("ID is " + req.params.id);
});

app.listen(3000, () => console.log("Server started on port 3000..."));
