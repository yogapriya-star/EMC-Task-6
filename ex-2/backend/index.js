const express = require("express")

const app = express()
const fruits = [];

app.get("/", function (req, res){
    res.send("You entered the kitchen")
})

app.get("/add-fruit", function (req, res) {
    const fruitName = req.query.fruitName;
    if (fruitName) {
        fruits.push(fruitName);
        console.log("Fruit array:", fruits);
        res.send(`Added ${fruitName} to the list of fruits.`);
    } else {
        res.send("Please provide a valid fruit name.");
    }
});

app.get("/fruits", function (req, res) {
    res.json(fruits);
});


app.listen(5000, function (){
    console.log("Server started...")
})