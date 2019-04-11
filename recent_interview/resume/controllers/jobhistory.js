var historyModel = require('../models/jobhistory');
var employeeModel = require('../models/employee');
var faker = require('faker');

const history = {
  addHistory(req, res){
    //fetch each employee
    employeeModel.find({}, (err, employees) => {
      if(err) return res.status(500).json({err, message: 'data could not be fetched'});
      //adding 3 job histories for each employee
      employees.forEach(employee => {
        for (let i = 0; i < 3; i++){
        let data = {
          employee_id: employee._id,
          date: faker.date.recent(),
          title_id: req.body.title_id,
          department_id: req.body.department_id,
          pay: faker.random.number()
        };
        historyModel.create(data, function(err){
          if (err) return res.status(409).json({err, message: 'Some error occured'})
          })  
        }
      });
    return res.status(200).json({message: 'History created successfully'});
    });
  },
  listHistory(req, res){
    historyModel.find({}, (err, result) => {
      if(err) return res.status(500).json({err, message: 'data could not be fetched'});
      return res.json(result)
    })
  },
  getById(req, res){
    historyModel.findById(req.params.id, (err, result) => {
      if(err) return res.status(500).json({err, message: 'data could not be fetched'});
      return res.json(result)
    })
  }
}

module.exports = history;