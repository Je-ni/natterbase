let mongoose = require('mongoose');

let job_historySchema = mongoose.Schema({
  employee_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Employee'},
  date: String,
  title_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Title'},
  department_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Department'},
  pay: String
})

module.exports = mongoose.model('job_history', job_historySchema);