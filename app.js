const { server } = require('./server');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/auth-users', {
  useMongoClient: true
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
