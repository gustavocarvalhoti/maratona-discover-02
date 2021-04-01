const express = require('express');
const server = express();
const routes = require('./routes');
const port = 3001;

/* <%= EJS %> For use this tags */
server.set('view engine', 'ejs');

// Statics files on the folder public
// Create the routes automatic
server.use(express.static("public"));

// Habilitar req.body
server.use(express.urlencoded({extended: true}));

server.use(routes);

server.listen(port, () => console.log(`Running on the port ${port}`));