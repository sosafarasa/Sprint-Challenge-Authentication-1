const middlware = require('../utils/middlewares');
const jokes = require('../controllers/jokes');

module.exports = server => {
  server.get('/jokes', jokes.getAllJokes);
  server.route('/users').post(/* I need some controller Love*/);
  server.route('/login').post(/* I need some controller Love*/);
  server.route('/logout').post(/* I need some controller Love*/);
};
