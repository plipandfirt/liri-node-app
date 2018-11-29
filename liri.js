require("dotenv").config();

// Access of exports in keys.js file
var keys = require("./keys.js");

// Include the axios npm package
var axios = require("axios");

var fs = require("fs");
//liri function

function liri() {
    fs.readFile("random.txt", "utf8", function (err, data) {
        var randomText = data.split(",");
        process.argv[2] = randomText[0];
        process.argv[3] = randomText[1];
        if (process.argv[2] === "concert-this") {
            venueSearch(process.argv[3]);
            return
        }
        // if (process.argv[2] === "spotify-this-song") {
        //     spotifySearch(process.argv[3]);
        //     return
        // }
        // if (process.argv[2] === "movie-this") {
        //     movieSearch(process.argv[3]);
        //     return
        // }
        else {
            console.log ("Please enter a valid command inside random.txt file.");
            console.log("Something isn't right --- please review, this is what you typed" + data + ".\r\n");
            console.log("-------------------------------------------------------------");
        }
    });
}
//randomText();

liri(process.argv[2], process.argv[3]);

//venue search function
function venueSearch(input) {
    var artist = input;

    //Then run a request with axios to the Band in Town API
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function (response) {
            console.log("There are " + response.data.length + " upcoming venues for " + artist + ".\r\n");
            for (i = 0; i < response.data.length; i++) {
                var venue = response.data[i].venue;
                var date = response.data[i].datetime;
                // var formatDate = moment(date).format("MM/DD/YYYY");
                // var dateUntil = moment(date).diff(moment(), "days");
                console.log("-------------------------------------------------------------");
                console.log(artist + " will perform at " + venue.name + ".");
                console.log("The " + artist + "performance will be located in " + venue.city + ", " + venue.region + ", " + venue.country + ".");
                // console.log(artist + " will preform on " + formatDate + ", this is in " + dateUntil + "days.");
                console.log("-------------------------------------------------------------");
            }
        }
    );
}
venueSearch();

// //omdb function
// function movieSearch(input) {
//     var artist = input;

//     // Then run a request with axios to the OMDB API
//     axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
//         function (response) {
//             console.log("The movie's rating is: " + response.data.imdbRating);
//             console.log("Release Year: " + response.data.Year);
//         }
//     );
// }

// //spotify function
// //var spotify = new Spotify(keys.spotify);

// function songSearch(input) {
//     var artist = input;
    
//     // Then run a request with axios to the Spotify API
//     axios.get("https://www.npmjs.com/package/node-spotify-api").then(
//         function (response) {
//             console.log("The song name is " + response.data.name);
//             console.log("The album the song is from is " + response.data.album);
//             console.log("Preview to the song = " + response.data.link);
//         }
//     );
// }

// If no song is provided default response to "The Sign" by Ace of Base