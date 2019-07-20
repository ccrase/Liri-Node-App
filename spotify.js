    
//require Spotify
const Spotify = require('node-spotify-api');
//require keys.js
const keys = require('./keys');
var spotify = new Spotify(keys.spotify);

var fs = require("fs");

    //_______________________________spotify request for specific URL______________________________________
var SpotifySearch = function(song){ 
    
    var getArtists = function(artist){
        return artist.name;
    }

    spotify.search({
        type: 'track',
        query: song
    },function(err, data){
        if(err){
            console.log("Error Occured: " + err);
            return;
        }

        let songs = data.tracks.items;

        for(var i = 0; i < songs.length; i++){
            let name =songs[i].name;
            let artist=songs[i].artists.map(getArtists);
            let album = songs[i].album.name;
            let preview = songs[i].preview_url;
            let songResults = name +" "+ artist +" "+ album +" "+ preview;
             console.log('Song Name: ' + name);
             console.log('Artist(s): ' + artist);
             console.log('Album: ' + album);
             console.log('Song Preview: ' + preview);

             console.log("-------------------------------------");
             fs.appendFile("log.txt", songResults, function(err){
                if(err) throw err;
            });
         }
        
    });

};

module.exports = SpotifySearch;