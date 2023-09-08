const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  Name: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('Seller', sellerSchema);