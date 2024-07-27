const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  photo: String,
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
  },
  passwordConfrim: {
    type: String,
    required: [true, 'Please confrim your password'],
    validate: {
      validator: function (val) {
        return this.password === val;
      },
      message: 'password is not match',
    },
  },
});

userSchema.pre('save', async function (next) {
  // Only run this function if passward was actually modified.
  if (!this.isModified('password')) return next();

  // Hash the password cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfrim field
  this.passwordConfrim = undefined;
});

const User = mongoose.model('User', userSchema);

module.exports = User;
