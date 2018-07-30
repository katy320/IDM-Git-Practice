#Title

const minify = require('minify');

minify('client.js', (error, data) => {
if (error)
return console.error(error.message);

console.log(data);
});
