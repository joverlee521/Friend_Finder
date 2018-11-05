var express = require("express");
var path = require("path");
var friends = require("../data/friends");

var api = express.Router();

api.get("/api/friends", function(req, res){
    return res.json(friends);
});

module.exports = api;