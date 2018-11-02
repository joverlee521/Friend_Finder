var express = require("express");
var path = require("path");

var app = express();
var PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});