var express = require("express");
var friends = require("../data/friends");
var api = express.Router();

api.get("/api/friends", function(req, res){
    res.json(friends);
});

api.post("/api/friends", function(req, res){
    var newFriends = req.body;
    friends.push(newFriends);
    res.json(newFriends);
});

module.exports = api;