const express = require('express');
const server = express();
const routes = require('./routes');
const port = 3001;

/* <%= EJS %> For use this tags */
server.set('view engine', 'ejs');

// Statics files on the folder public
// Create the routes automatic
server.use(express.static("public"));

server.use(routes);

server.listen(port, () => console.log(`Running on the port ${port}`));