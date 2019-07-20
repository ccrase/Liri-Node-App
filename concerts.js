//require Axios
const axios = require('axios');
const moment = require('moment');
var fs = require("fs");



var Concertsjs = function(concert){
//____________________________________Bands in Town_____________________________________________________
    let bandsInTownQuery = 'https://rest.bandsintown.com/artists/' + concert + '/events?app_id=codingbootcamp';
    axios.get(bandsInTownQuery)
    .then(function(response){
        
        for(var i = 0; i< response.data.length; i++){
        let data = response.data[i];
        let venue = data.venue.name;
        let city = data.venue.city;
        let time = data.datetime;
        let formattedTime = moment(time).format('MMMM Do YYYY, hh:mm a');
        let concertResults = venue +" "+ city +" "+ formattedTime;

        console.log("Venue: " + venue);
        console.log("City: " + city);
        console.log("Time: " + formattedTime);

        console.log("---------------------------------");
    
        fs.appendFile("log.txt", concertResults, function(err){
            if(err) throw err;
        });
        };
    })

}   

module.exports = Concertsjs;