const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  const myUser = new User({ username, password });
  myUser
    .save()
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      return res.status(500).json({ error: err });
    });
};

module.exports = {
  createUser
};
