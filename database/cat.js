var express = require("express");
var cat = express();
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:3000/SofiDz', { useNewUrlParser: true, useUnifiedTopology: true });


var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String
});
var Cat = mongoose.model("Cat", catSchema);

var george = new Cat({
    name: "George",
    age: 12,
    temperament: "Grouchy"
});

george.save(function(err, cat) {
    if (err) {
        console.log("something went wrong");
    } else {
        console.log("We seccesfuly saved George!");
        console.log(cat);
    }
});


Cat.then(() => console.log('Connected to DB!'))
Cat.catch(error => console.log(error.message));