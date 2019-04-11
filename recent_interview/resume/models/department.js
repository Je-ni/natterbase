let mongoose = require('mongoose');

let departmentSchema = mongoose.Schema({
  name: String,
  manager_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Employee'},
})

module.exports = mongoose.model('Department', departmentSchema);