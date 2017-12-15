const fetch = require('node-fetch');

const getAllJokes = (req, res) => {
  fetch('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten')
    .then(p => p.json())
    .then(jokes => res.json(jokes))
    .catch(err => res.status(500).json({ error: 'Error Fetching Jokes' }));
};

module.exports = {
  getAllJokes
};
