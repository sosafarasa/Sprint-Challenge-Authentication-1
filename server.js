const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./api/routes/routes');

const server = express();
const corsOptions = {
  // You'll need to set the request URL here.
  // Once done, pass this object to the cors middleware.
};

server.use(bodyParser.json());
server.use(cors());

routes(server);

module.exports = {
  server
};
