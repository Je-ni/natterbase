var express = require('express');
var router = express.Router();
var job_historyController = require('../controllers/jobhistory')

/* GET users listing. */
router.get('/', job_historyController.listHistory);
router.post('/', job_historyController.addHistory);
router.get('/:id', job_historyController.getById);


module.exports = router;