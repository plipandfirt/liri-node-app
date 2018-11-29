
// array arguments
// var nodeArgs = process.argv;

// movie name variable
// var movieName = "";

// Loop through all the words in the node argument
// for (var i = 2; i < nodeArgs.length; i++) {

//   if (i > 2 && i < nodeArgs.length) {
//     movieName = movieName + "+" + nodeArgs[i];
//   }
//   else {
//     movieName += nodeArgs[i];

//   }
// }

    //artist = artist.charAt(0).toUpperCase() + artist.slice(1);

// Then run a request with axios to the OMDB API
// axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
//   function(response) {
//     console.log("The movie's rating is: " + response.data.imdbRating);
//     console.log("Release Year: " + response.data.Year);
//   }
// );


// //---------------------------//

// // Then run a request with axios to the Spotify API
// axios.get("https://www.npmjs.com/package/node-spotify-api").then(
//   function(response) {
//     console.log(response.data);
//     console.log('this is loaded');
//   },

//   exports.spotify = {
//     id: process.env.SPOTIFY_ID,
//     secret: process.env.SPOTIFY_SECRET
//   }


//   function(error) {
//     if (error.response) {
//       // The request was made and the server responded with a status code
//       // that falls out of the range of 2xx
//       console.log(error.response.data);
//       console.log(error.response.status);
//       console.log(error.response.headers);
//     } else if (error.request) {
//       // The request was made but no response was received
//       // `error.request` is an object that comes back with details pertaining to the error that occurred.
//       console.log(error.request);
//     } else {
//       // Something happened in setting up the request that triggered an Error
//       console.log("Error", error.message);
//     }
//     console.log(error.config);
//   }
// );