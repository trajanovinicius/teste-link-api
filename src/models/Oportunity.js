const mongoose = require("mongoose");

const oportunitySchema = new mongoose.Schema({
  oportunity_id: String,
  value: Number,
  day: String,
});

const Oportunity = mongoose.model("Oportunity", oportunitySchema);

module.exports = Oportunity;
