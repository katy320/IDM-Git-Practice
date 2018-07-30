const minify = require('minify');
const fs = require('fs'); //file systems: module for reading/writing new files

minify('styles.css', (error, data) => { //the file gets minified to data
if (error)
return console.error(error.message);

fs.writeFile("newStyles.css", data, function(err){
    console.log(err); //logs the error to the console
    });
});
