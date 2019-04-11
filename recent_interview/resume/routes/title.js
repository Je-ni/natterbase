var express = require('express');
var router = express.Router();
var titleController = require('../controllers/title')

/* GET users listing. */
router.get('/', titleController.listTitles);
router.post('/', titleController.addTitle);
router.get('/:id', titleController.getById);


module.exports = router;