const AccountModel = require('../models/user');

exports.getAllUsers = (req,res,next) =>{
    console.log(AccountModel);
    AccountModel.find({

    }).then(data =>{
        console.log(data);
        res.json(data);
        // console.log('1'  + data);
        // res.send({
        //     listProducts : data});
    }).catch(err =>{
        console.log(err);
    } )
};