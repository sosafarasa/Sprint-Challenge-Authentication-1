const express = require('express');
const cors = require('cors');

const configureRoutes = require('../config/routes.js');

const server = express();
const corsOptions = {
  // If you're moving onto the stretch problem you may need to set the appropriate options
};

server.use(express.json());
server.use(cors());

configureRoutes(server);

module.exports = {
  server,
};
