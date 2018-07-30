# How to run the node script

Author: Katie Zhao
Date: July 26th, 2018
IDM T380 - Challenge 2

Task: use Node.js and NPM to build a simple utility that will minimize the 'src/styles.css' file and place the new, minimuzed file in a new folder named 'dist'

Note: My node.js file downloaded but terminal did not find the package. 
I got the following error message: 'npm command not found'
Node.js is downloaded to /usr/local/bin 
When you 'echo $PATH' and /usr/local/bin is not in the path, make it by typing the following into the terminal:
'export PATH=$PATH:/usr/local/bin

'node -v' checks the node.js versus that you have downloaded.

I used 'minify' by typing this into the terminal:
'npm install minifier'

and got this result:
'+ minifier@0.8.1
added 35 packages in 3.901s'

Then I typed this into the terminal to run the program: 'node minifyscript.js'
    

