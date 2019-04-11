var employeeModel = require('../models/employee');
var faker = require('faker');

const employee = {
  addEmployee(req, res){
    for (let i = 0; i < 5; i++){ //adding 5 employees
      let data = {
        last_name: faker.name.lastName(),
        first_name: faker.name.firstName(),
        middle_initial: 'Lorem',
        sex: 'male',
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        region: faker.address.state(),
        postal_code: faker.address.zipCode(),
        home_phone: faker.phone.phoneNumber(),
        office_phone: faker.phone.phoneNumber(),
        office_location: faker.address.secondaryAddress(),
        manager_id: '',
        vacation_hours: faker.random.number(),
        sick_leave_hours: faker.random.number()
      }
      employeeModel.create(data, function(err, result){
        if (err) return res.status(409).json({err, message: 'Some error occured'})
      })
    }
    return res.status(200).json({message: 'Employees added successfully'})
  },
  listEmployees(req, res){
    employeeModel.find({}, (err, result) => {
      if(err) return res.status(500).json({err, message: 'data could not be fetched'});
      return res.json(result)
    })
  },
  getById(req, res){
    employeeModel.findById(req.params.id, (err, result) => {
      if(err) return res.status(500).json({err, message: 'data could not be fetched'});
      return res.json(result)
    })
  }
}

module.exports = employee;