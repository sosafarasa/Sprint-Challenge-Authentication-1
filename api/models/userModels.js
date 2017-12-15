const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
  // create your user schema here.
});

module.exports = mongoose.model('User', UserSchema);
