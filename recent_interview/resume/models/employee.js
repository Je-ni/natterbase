let mongoose = require('mongoose');

let employeeSchema = mongoose.Schema({
  last_name: String,
  first_name: String,
  middle_initial: String,
  sex: String,
  address: String,
  city: String,
  region: String,
  postal_code: String,
  home_phone: String,
  office_phone: String,
  office_location: String,
  manager_id: String,
  vacation_hours: String,
  sick_leave_hours: String
})

module.exports = mongoose.model('Employee', employeeSchema);