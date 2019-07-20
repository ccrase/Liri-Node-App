
//____________________________________libraries & variables____________________________________________
//require dotenv
require('dotenv').config();

//require concerts.js
const concertsjs = require('./concerts');

//require spotify.js
const spotifySearch = require('./spotify');

//require movie.js
const moviejs = require('./movie');

//require inquirer
const inquirer = require('inquirer');

let userinputType;
let userinputTitle;
let defaultInput = "I want it that way";

//_____________________________________________inquirer________________________________________________
inquirer.prompt([
    //pass questions here
    {type: 'input',
    name: 'type',
    message: 'Type either "concert-this", "spotify-this-song", "movie-this" ',
    default: ''},

    {type: 'input',
    name: 'title',
    message: 'Search for a Title',
    default: ''}
])
.then(answers =>{
    //use user feedback for ... whatever!
    userinputType = answers.type;
    userinputTitle = answers.title;

     switch(userinputType){
        case "concert-this":
            console.log("you picked a concert");
            concertsjs(userinputTitle);
        break;
        
        case "spotify-this-song":
            console.log("you picked a song");
            spotifySearch(userinputTitle);
        break;
        
        case "movie-this":
            console.log("you picked a movie");
            moviejs(userinputTitle);
        break;
        
        default:
            console.log("do-what-it-says!");
            //still working on this part, having trouble passing in the default input when the user doesn't input anything
            if(!userinputTitle){
                concertsjs(defaultInput);
            };

    };
});
