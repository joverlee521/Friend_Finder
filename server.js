// Required NPM package
var express = require("express");
// Store express function in a variable
var app = express();
// Dynamic PORT that can be used with Heroku or locally
var PORT = process.env.PORT || 8080;

// Express middleware to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Link server to route files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Starts the server
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});