var express = require('express');
var router = express.Router();
var departmentController = require('../controllers/department')

/* GET users listing. */
router.get('/', departmentController.listDepartments);
router.post('/', departmentController.addDepartment);
router.get('/:id', departmentController.getById);


module.exports = router;