const {
  authenticate,
  encryptUserPW,
  compareUserPW
} = require('../utils/middlewares');

const { jokes, createUser, login } = require('../controllers');

module.exports = server => {
  server.get('/api/jokes', authenticate, jokes.getAllJokes);
  server
    .route('/api/users')
    .post(encryptUserPW /* I need some controller Love*/);
  server.route('/api/login').post(compareUserPW, login);
};
