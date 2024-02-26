const express = require("express")

const app = express()

app.get("/", function (req, res){
    res.send("You entered the kitchen")
})


app.get("/name", function (req, res){
    res.send("Hi, My name is John.")
})

app.get("/age", function (req, res){
    res.send("My age is 26")
})

app.get("/address", function (req, res){
    res.send("My addresss is : Trichy-620006, Tamilnadu, India.")
})

app.listen(5000, function (){
    console.log("Server started...")
})