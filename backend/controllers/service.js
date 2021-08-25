const AccountModel = require('../models/user');

exports.addToCart = (req, res, next) => {
    // console.log(req.body.username +'    ' + req.body.id);
    AccountModel.findOne({
        username : req.body.username
    },function(err,user){
        if(err) {console.log(err)}
        else{  
            // console.log('zo');
            user.addToCart(req.body.id)
            .then(() => {
               res.json('add succesfully'); // console.log('add successfully');
            }).catch(err => console.log(err));
        }
    })
};

exports.removeFromCart = (req,res,next) =>{
    AccountModel.findOne({
        username : req.body.username
    },function(err,user){
        if(err) {console.log(err)}
        else{  
            // console.log('zo');
            user.removeFromCart(req.body.id)
            .then(() => {
               res.json('remove succesfully'); // console.log('add successfully');
            }).catch(err => console.log(err));
        }
    })
};
