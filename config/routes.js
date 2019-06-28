const axios = require('axios');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
//
const db = require('./users-model');
//
const { authenticate } = require('../auth/authenticate');

const jwtKey =
  process.env.JWT_SECRET || 'Cause two can keep a secret, if one of them is dead... ';

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/', login);
  server.get('/api/jokes', authenticate, getJokes);
};

function register(req, res) {
  // implement user registration
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 8);
  user.password = hash;

  db.add(user)
    .then(saved => {
      const token = generateToken(saved);
      console.log(saved)
      res.status(201).json({message: `Welcome ${saved.username}!`, token});
    })
    .catch(err => {
      res.status(500).json(err);
    });
}

function login(req, res) {
  // implement user login
  let { username, password } = req.body;

  db.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);

        res.status(200).json({
          message: `Welcome ${user.username}!, I have a token`,
          token
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials ' });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}

function generateToken(user){
  const payload = {
    subject: user.id,
    username: user.username
  };
  const options = {
    expiresIn: '1d'
  };
  return jwt.sign(payload, jwtKey, options)
};