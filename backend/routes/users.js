var express = require('express');
var router = express.Router();

const serviceControllers = require('../controllers/service');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/addToCart',serviceControllers.addToCart);
router.post('/removeFromCart',serviceControllers.removeFromCart);



module.exports = router;
