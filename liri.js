require("dotenv").config();
var axios = require("axios");
// var keys = require("./keys.js");

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

var spotify = require('spotify');

let songCommand = process.argv[2];
if (songCommand === "spotify-this-song") {
    console.log("Searching for song or artist info...")
}

// process.argv[3] = function(){}

// spotify.search({ type=" ", query=" " }, function(err, data) {
//     if ( err ) {
//         console.log('Error occurred: ' + err);
//         return;
//     }
//  console.log(data);

// }
//     // Do something with 'data'
// });

// // spotifyThisSong(spotify);
// let songCommand = process.argv[2];

// let song = process.argv[3];

// if (songCommand === "spotify-this-song") {
//     console.log("Searching for a song...");

// if (song === ) {
//      console.log("Searching for a song...")

// spotify
//   .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
//   .then(function(data) {
//     console.log(data); 
//   })
//   .catch(function(err) {
//     console.error('Error occurred: ' + err); 
//   });

// axios.get('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx').then(
//     function (response) {
//         console.log("looking for a song: " + response);
//     }
// );
// }


// ////////////////////////////////////////////////////////

// // function doWhatItSays() {
// //     fs.readFile("random.txt", "utf8", function (err, data) {
// //         if (err) {
// //             return console.log("Error occurred: " + err);
// //         } else {
// //             data = data.split(",");
// //             let command = data[0];
// //             let nameArray = data[1].split(" ");
// //             let name = "";
// //             for (let i = 0; i < nameArray.length; i++) {
// //                 if ((i > 0) && (i < nameArray.length)) {
// //                     name += " " + nameArray[i];
// //                 } else {
// //                     name += nameArray[i];
// //                 }
// //             }
// //             name = name.replace(/"/g,"");
// //             liri(command, name);
// //         }
// //     });
// // }
// // doWhatItSays();




// // var movie = function () {
// //     title = " ",
// //         rating = " ",
// //         rottenTomatoes = " ",
// //         country = " ",
// //         language = " ",
// //         plot = " ",
// //         cast = " "
// // } we dont need this because look below:

// // * `do-what-it-says`

// // Use the following commands: where app will happen. user requests here

// // ///`concert-this`

// // * `spotify-this-song`

// // * `movie-this`

// // Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)

// /// either INVALID --- or other command types aka spotify

// // let type = process.argv[3];
// // if(type === "title"){
// //     console.log(response.data.title)
// // }
// // Then run a request with axios to the OMDB API with the movie specified
// // Then run a request with axios to the OMDB API with the movie specified