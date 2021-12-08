const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/user');
const cartControllers = require('../controllers/cart');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/cart/add',cartControllers.addToCart);
router.post('/cart/remove',cartControllers.removeFromCart);
router.post('/cart/update',cartControllers.updateCart);
router.get('/cart/show',cartControllers.showCart);
router.post('/cart/checkout',userControllers.checkoutCart);



module.exports = router;