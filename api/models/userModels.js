const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const UserSchema = Schema({
  // create your user schema here.
});

// note that we've included bcrypt in this file. Ensure that your password encryption is done at this level
// You can use a pre-save hook to achieve this.

// Also, feel free to implement a checkPassword method to the UserSchema.methods object for use later
module.exports = mongoose.model('User', UserSchema);
