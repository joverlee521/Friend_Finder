// Linking to our data source
var friends = require("../data/friends");

module.exports = function(app){
    // API GET request that displays all friends in database
    app.get("/api/friends", function(req, res){
        return res.json(friends);
    });

    // API POST request to handle when user submits the survey
    app.post("/api/friends", function(req, res){
        // Grabs the data that user has entered
        var newFriends = req.body;
        // Converts scores to integers on server side
        newFriends.scores = newFriends.scores.map(function(x){
            return parseInt(x);
        });
        var newScores = newFriends.scores;
        // New array to store the difference between user's scores
        var differenceArray = [];
        // Loops through friends data array 
        for(var i = 0; i < friends.length; i++){
            // Grabs scores of each old user
            var oldFriend = friends[i].scores;
            // Finds the absolute difference between old user score and new user score and stores in array
            var resultArray = oldFriend.map(function(item,index){
                return Math.abs(item - newScores[index]);
            });
            // Simple function to add indices of resultArray
            function add(a, b){
                return a + b;
            }
            // Calculate the total difference between old user and new user
            var result = resultArray.reduce(add, 0);
            // Store each difference in an array
            differenceArray.push(result);
        }
        // Find index of the minimum difference in the differenceArray 
        var bestIndex = differenceArray.indexOf(Math.min(...differenceArray));
        // Store the new user data into "database"
        friends.push(newFriends);
        // Return the data for the old user with the minimum difference
        return res.json(friends[bestIndex]);
    });
}