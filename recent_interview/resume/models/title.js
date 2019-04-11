let mongoose = require('mongoose');

let titleSchema = mongoose.Schema({
  title: String,
  level: String,
  job_description: String,
  low_pay: String,
  high_pay: String
})

module.exports = mongoose.model('Title', titleSchema);