const jwt = require('jsonwebtoken');
const { mysecret } = require('../../config');

const login = (req, res) => {
  if (!req.username) {
    return res.status(403).json({
      error: 'no username check your comparePW middleware'
    });
  }
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
