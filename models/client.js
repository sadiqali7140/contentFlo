const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  name: String,
  tier: String
});

const Client = mongoose.model('Client', ClientSchema);

module.exports = Client;
