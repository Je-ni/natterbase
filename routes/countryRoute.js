const { Router } = require('express');
const country = require('../controllers/countriesController');
const { authorize } = require('../middleware');

const router = Router();

router.get('/', authorize, country.list);
router.put('/', authorize, country.create);
router.delete('/', authorize, country.delete);

module.exports = router;
