const jwt = require('jsonwebtoken');

const login = (req, res) => {
  const payload = {
    username: req.username
  }; // some inforomation about our JWT on the Payload portion
  const token = jwt.sign(payload, mysecret, {
    expiresInMinutes: 1440 // expires in 24 hours
  }); // creates our JWT
  res.json({ token });
};

module.exports = {
  login
};
