// Required NPM package
var path = require("path");

module.exports = function(app){
    // HTML GET requests to display HTML content when user visits the page
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    // If not matching route if found, the website will default to the homepage
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })
}