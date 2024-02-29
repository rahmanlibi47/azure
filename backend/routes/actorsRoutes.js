const router = require('express').Router();
const actorsController = require('../controllers/actorsController');

router.route('/').get(actorsController.getActors);

module.exports = router;