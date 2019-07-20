const axios = require('axios');
var fs = require("fs");

var moviejs = function(movie){
    //__________________________________________OMDB________________________________________________________
    axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy")
    .then(function(response){
        let title =response.data.Title;
        let plot= response.data.Plot;
        let actors= response.data.Actors;
        let rated= response.data.Rated;
        let release= response.data.Year;
        let imdb =response.data.imdbRating;
        let rottentoms= response.data.Ratings[1].Value;
        let lang = response.data.Language;
        let movieResults = title + " " + plot + " " + actors + " " + rated + " " + release + " " + imdb + " " + rottentoms + " " + lang;
        
        console.log("-------------------------------------");
        console.log('Title: ' + title);
        console.log('Plot: ' + plot);
        console.log('Actors: ' + actors);
        console.log('Rated: ' + rated);
        console.log('Release Date: ' + release);
        console.log('Imbd Rating: ' + imdb + '/10');
        console.log('Rotten Tomatoes Score:' + rottentoms);
        console.log('Language: '+ lang);
        fs.appendFile("log.txt", movieResults, function(err){
            if(err) throw err;
        });
    })
};

module.exports = moviejs;