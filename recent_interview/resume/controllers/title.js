var titleModel = require('../models/title')
var faker = require('faker');

const title = {
  addTitle(req, res){
    let data = {
      title: faker.name.jobTitle(),
      level: faker.name.jobType(),
      job_description: faker.name.jobDescriptor(),
      low_pay: faker.random.number(),
      high_pay: faker.random.number(),
    }
    titleModel.create(data, function(err, result){
      if (err) return res.status(409).json({err, message: 'Some error occurred'})
      else {
        return res.json(result)
      }
    })
  },
  listTitles(req, res){
    titleModel.find({}, (err, result) => {
      if(err) return res.status(500).json({err, message: 'data could not be fetched'});
      return res.json(result)
    })
  },
  getById(req, res){
    titleModel.findById(req.params.id, (err, result) => {
      if(err) return res.status(500).json({err, message: 'data could not be fetched'});
      return res.json(result)
    })
  }
}

module.exports = title;