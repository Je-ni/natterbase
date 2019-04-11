var express = require('express');
var router = express.Router();
var employeeController = require('../controllers/employee')

/* GET users listing. */
router.get('/', employeeController.listEmployees);
router.post('/', employeeController.addEmployee);
router.get('/:id', employeeController.getById);


module.exports = router;