require("dotenv").config();
var axios = require("axios");
// var keys = require("./keys.js");

///require moment 

let Spotify = require("node-spotify-api");
require("./keys.js");


require("fs");



let movieCommand = process.argv[2];
if (movieCommand === "movie-this") {
    console.log("Searching for movie...")

var movieName = process.argv[3];

axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy").then(
    function (response) {
        console.log("The movie's title is: " + response.data.Title);
        console.log("The movie's rating is: " + response.data.imdbRating);
        console.log("The movie's release in: " + response.data.Released);
        console.log("The movie was produced in: " + response.data.Country);
        console.log("This movie stars: " + response.data.Actors);
        console.log("Rotten Tomatoes rated this as: " + response.data.Ratings[1].Value);
        console.log("The language of this film is: " + response.data.Language);
        console.log("The plot: " + response.data.Plot);
    }
)}
;

////////////////////////////////////////////////////////////////////////////////////////////////////
///Spotify Portion///

require('spotify');

spotify = new Spotify({
    id: yffe2a620de7d45eea35774e1c1d9dcde,
    secret: f5304a1a1c8e4bb1a7259b0c29093aee
  });

let songCommand = process.argv[2];
if (songCommand === "spotify-this-song") {
    console.log("Searching for song or artist info...")
}

let song =process.argv[3] ;
  {/* .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  }); */}