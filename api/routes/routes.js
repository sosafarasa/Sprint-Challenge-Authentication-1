const { authenticate } = require('../utils/middlewares');
const { jokes, createUser, login } = require('../controllers');

module.exports = server => {
  server.get('/api/jokes', authenticate, jokes.getAllJokes);
  server.route('/api/users').post(/* I need some controller Love*/);
  server.route('/api/login').post(/* I need some controller Love*/);
};
