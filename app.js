const express = require('express');
const mongoose = require('mongoose');
const Question = require('./models/question');
const app = express();
const port = process.env.PORT || 3000
const dbUrl ='mongodb+srv://aliwaseembutt6:8GfJhr4GfHiKMUZ@pencil.uarf3.mongodb.net/pencil?retryWrites=true&w=majority'

mongoose.connect(dbUrl).then((result) => {
    console.log("Database Connection Successfull")
    app.listen(port)
}).catch((err) => {
    console.log("Database Connection Error")
}) 
app.set('view engine', 'ejs');

    app.get('/' , (req, res) => {
        // Question.findOne( { _id: "MongoDB" } ).ancestors
        Question.find().then((result) => {
            res.send(result)
        }).catch((err) =>{
            console.log("Error, No Data...")
        })
        // res.render('index' , {title:'Home Page'});
    })

    app.get('/search' , (req, res) => {
        Question.find({ _id: "61c85a2da1122189d1f52da0" }).then((result) => {
            res.send(result)
        }).catch((err) =>{
            console.log("Error, No Data...")
        })
    })

