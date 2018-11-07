var express = require("express");
var path = require("path");
var router = express.Router();

router.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

router.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

router.get("*", function(req, res){
    res.redirect("/");
})

module.exports = router;