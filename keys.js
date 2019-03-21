

require("dotenv").config();

var spotify = new Spotify(keys.spotify);

console.log('this is loaded');

exports.spotify = {
  id: process.env,
  secret: process.env
};

var bandsintown = require('bandsintown')(ffe2a620de7d45eea35774e1c1d9dcde);
 
bandsintown
  .getArtistEventList('Skrillex')
  .then(function(events) {
    // return array of events
  });

//   module.export = 