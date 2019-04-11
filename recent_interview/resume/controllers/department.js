var departmentModel = require('../models/department')
var faker = require('faker');

const department = {
  addDepartment(req, res){
    let data = {
      name: faker.commerce.department(),
      manager_id: req.body.manager_id
    }
    departmentModel.create(data, function(err, result){
      if (err) return res.status(409).json({err, message: 'Some error occured'})
      else {
        return res.json(result)
      }
    })
  },
  listDepartments(req, res){
    departmentModel.find({}, (err, result) => {
      if(err) return res.status(500).json({err, message: 'data could not be fetched'});
      return res.json(result)
    })
  },
  getById(req, res){
    departmentModel.findById(req.params.id, (err, result) => {
      if(err) return res.status(500).json({err, message: 'data could not be fetched'});
      return res.json(result)
    })
  }
}

module.exports = department;