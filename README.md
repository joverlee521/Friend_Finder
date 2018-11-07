# Friend Finder
A full-stack application that acts as a compatibility-based friend finder. 

## Deployment
The application is deployed to Heroku:
[https://jl-friendfinder.herokuapp.com](https://jl-friendfinder.herokuapp.com)
* There may be a small delay when you first try to access the application due to the web dyno going to sleep if it receives no traffic for 30 minutes

## How To
1. Press the "Take the Survey" button to navigate to the the survey page
1. Enter your name, a link to your photo, and answer the survey questions
1. After submitting your answers, the app will find another user with whom you are most compatible and display that user's name and photo in a modal
    * If you do not answer all of the survey questions, an error modal will ask you to complete all questions

## Technologies Used
* HTML and Bootstrap
* JavaScript, jQuery, Node.js
* [Express](https://www.npmjs.com/package/express)
* [Path](https://www.npmjs.com/package/path)
