var express = require("express");
var path = require("path");
var home = require("./app/routing/htmlRoutes");
var api = require("./app/routing/apiRoutes");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", home);
app.use("/api/friends", api)

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});