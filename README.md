Introduction:
LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app. LIRI searches for Spotify songs, Bands in Town for concerts and OMDB for movies based off of user input. 

Organization:
The liri.js file contains the inquire library and switch statements that determine which other functions to run. This file requires spotify.js, concerts.js and movie.js.

The spotify.js file contains the functions and API call for spotify.This file requires the keys.js file which contains the spotify API keys. 

The concerts.js file contains the functions and API call for Bands in Town.

The movie.js file contains the functions and API call for OMDB. 

*all three files (spotify.js, concerts.js and movie.js) use the fs library to write to the log.txt file. 

Instructions:
Because I've used inquirer, the user will be prompt to insert specific inputs. To start, simply type "node liri.js" and press enter. 

Images:
Check out the images folder for screenshots of the working application for each case.

Technologies Used:
-inquirer
-fs
-dotenv
-node-spotify-api
-axios
-moment
