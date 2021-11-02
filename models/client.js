const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  name: {
    type: String,
    required: true,
    index: { unique:true },
  },
  tier: String
});

const Client = mongoose.model('Client', ClientSchema);

module.exports = Client;
