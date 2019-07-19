//We're in
console.log('Hello World!');
//require inquirer
//const inquirer = require()
//require Spotify
const Spotify = require('node-spotify-api');
//require Axios
const axios = require('axios');

//_____________________________________spotify API key_________________________________________________
let spotify = new Spotify({
    id: 'd066731a8cdc4e1f859284f5c604db08',
    secret: '963e639123ef4513bd85b4bcdcb46233' 
});
//_______________________________spotify request for specific URL______________________________________
spotify.request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
.then(function(response){
    console.log(response);
})
.catch(function(err){
    console.log(err);
});



