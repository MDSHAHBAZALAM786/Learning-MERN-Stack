const express = require("express");
const app = express();
const path = require("path");
app.use(express.json());
app.use(express.urlencoded());
app.set("view engine", "ejs");
app.get("/", (req, res) => {
    res.render("demo5");
});
app.post("/", (req, res) => {
    const user = {
        fn: req.body.fname,
        em: req.body.email
    };
    res.render("result", { user });
});
app.listen(3000, () => console.log("Server Started on port 3000..."));
