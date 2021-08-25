var express = require('express');
var router = express.Router();
// var bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const indexController = require('../controllers/index');
const productController = require('../controllers/products');
const AccountModel = require('../models/user');

router.use(express.urlencoded({ extended: false }));
router.use(express.json());


router.post('/login',indexController.postLoginForm);

router.post('/register',indexController.postRegisterForm);

router.get('/getAllProduct',productController.getAllProduct);






    // .then(data => {
    //     if (data) {
    //         // res.json('Existed User');
    //         console.log('Existed User');
    //         res.send({
    //             status : 0
    //         });
    //     } else {
    //         console.log('Not Existed User');
    //         return AccountModel.create({
    //             username: username,
    //             password: password,
    //             email: email,
    //             role: 1,
    //         })
    //     }
    // }).then(data => {
    //     console.log('Regis Succesfully');
    //     res.json(`Account ${username} password ${password} create succesfully`);
    //     res.send({
    //         status: 1
    //     })
    // }).catch(err => {
    //     console.log('Error');
    //     res.status(500).json('Register Fail');
    // })

// router.post('/update', (req, res, next) => {
//     var username = req.body.username;
//     var password = req.body.password;
//     AccountModel.findOne({
//         username: username,
//         password: password
//     }).then(data => {
//         if (!data) {
//             res.json('User Not existed');
//         } else {
//             return AccountModel.update({ username: username }, { $push: { productOnCart: [
//                         ['xidau', 'nuocdua'],
//                         ['mamtom', 'nuocmam']
//                     ] } })
//         }
//     }).then(data => {
//         res.json('Update succesfully');
//     }).catch(err => {
//         res.status(500).json('Update Error');
//     })
// });
module.exports = router;