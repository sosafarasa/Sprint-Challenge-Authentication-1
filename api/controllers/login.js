const jwt = require('jsonwebtoken');

const login = (req, res) => {
  const payload = {
    username: req.username
  }; // what will determine our payload.
  const token = jwt.sign(payload, mysecret, {
    expiresInMinutes: 1440 // expires in 24 hours
  }); // creates our JWT with a secret and a payload and a hash.
  res.json({ token }); // sends the token back to the client
};

module.exports = {
  login
};
