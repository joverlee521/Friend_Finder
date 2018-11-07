var friends = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){
        var newFriends = req.body;
        var newScores = newFriends.scores;
        var differenceArray = [];
        for(var i = 0; i < friends.length; i++){
            var oldFriend = friends[i].scores;
            var resultArray = oldFriend.map(function(item,index){
                return Math.abs(item - newScores[index]);
            });
            function add(a, b){
                return a + b;
            }
            var result = resultArray.reduce(add, 0);
            differenceArray.push(result);
        }
        var bestIndex = differenceArray.indexOf(Math.min(...differenceArray));
        return res.json(friends[bestIndex]);
    });
}