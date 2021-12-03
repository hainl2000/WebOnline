var express = require('express');
var router = express.Router();
// var bodyParser = require('body-parser');
const adminController = require('../controllers/admin');
const usersController = require('../controllers/users');
const adminValidation = require('../validate/adminValid');
// const jwt = require('jsonwebtoken');

router.use(express.urlencoded({ extended: false }));
router.use(express.json());

router.post('/add',adminValidation.adminValid,adminController.addProduct);
// router.post('/add',adminController.addProduct);
router.post('/update',adminController.updateProduct);
router.get('/delete',adminController.deleteProduct);

router.get('/getAllUsers',usersController.getAllUsers);

module.exports = router;