const { Router } = require('express');
const user = require('../controllers/userController');

const router = Router();

router.post('/', user.login);

module.exports = router;