const mongoose = require('mongoose');
// const Schema = mongoose.Schema; this is same as line below.
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema);