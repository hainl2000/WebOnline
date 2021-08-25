var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const AccountModel = require('../models/account');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/', (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password
    console.log(username + ' ' + password);
    AccountModel.findOne({
        username: username,
        password: password
    }).then(data => {
        if (data) {
            if (data.role == 0) {
                res.json('Login admin');
            } else {
                res.json('Login user');
            }
        } else {
            res.json('Fail');
        }
    }).catch(error => {
        res.status(500).json('Error while Login');
    })
});

module.exports = router;