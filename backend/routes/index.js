var express = require('express');
var router = express.Router();
// var bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken');

const indexController = require('../controllers/index');
const productController = require('../controllers/products');
// const AccountModel = require('../models/user');

router.use(express.urlencoded({ extended: false }));
router.use(express.json());


router.post('/login',indexController.postLoginForm);

router.post('/register',indexController.postRegisterForm);

router.get('/getAllProducts',productController.getAllProducts);


module.exports = router;