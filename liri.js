
//____________________________________libraries & variables____________________________________________
//require inquirer
const inquirer = require('inquirer');
//require Spotify
const Spotify = require('node-spotify-api');
//require Axios
const axios = require('axios');

let userinput;

//_________________________________________spotify API key_____________________________________________
let spotify = new Spotify({
    id: 'd066731a8cdc4e1f859284f5c604db08',
    secret: '963e639123ef4513bd85b4bcdcb46233' 
});

//_____________________________________________inquirer________________________________________________
inquirer.prompt([
    //pass questions here
    {type: 'input',
    name: 'title',
    message: 'Search for a Title',
    default: ''}
])
.then(answer =>{
    //use user feedback for ... whatever!
    userinput = answer;
    console.log(userinput.title);

    //_______________________________spotify request for specific URL______________________________________
    spotify.search({
        type: 'track',
        query: userinput.title
    },function(err, data){
        if(err){
            console.log("Error Occured: " + err);
            return;
        }
        let songs = data.tracks.items;

        for(var i = 0; i < songs.length; i++){
             console.log('Song Name: ' + songs[i].name);
             //console.log('Artist(s): ' + songs[i].artists);
             console.log('Album: ' + songs[i].album.name);
             console.log("-------------------------------------");
         }
        
    });
    //__________________________________________OMBD________________________________________________________
    axios.get("http://www.omdbapi.com/?t=" + userinput.title + "&y=&plot=short&apikey=trilogy")
    .then(function(response){
        console.log("-------------------------------------");
        console.log('Title: ' + response.data.Title);
        console.log('Description: ' + response.data.Plot);
        console.log('Rated: ' + response.data.Rated);
        console.log('Release Date: ' + response.data.Year);
        console.log('Rating: ' + response.data.imdbRating + '/10');
    })
     //____________________________________Bands in Town_____________________________________________________
     let bandsInTownQuery = 'https://rest.bandsintown.com/artists/' + userinput.title + '/events?app_id=codingbootcamp';
     axios.get(bandsInTownQuery)
     .then(function(response){
         console.log(response);
     })
});








