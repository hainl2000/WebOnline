const AccountModel = require('../models/user');

exports.addToCart = (req, res) => {
    // console.log(req.body.username +'    ' + req.body.id);
    AccountModel.findOne({
        _id : req.cookies.userId
        // _id : req.body.userId
    },function(err,user){
        if(err) {console.log(err)}
        else{  
            // console.log('zo');
            user.addToCart(req.body.productId)
            .then(() => {
               res.json('add succesfully'); // console.log('add successfully');
            }).catch(err => console.log(err));
        }
    })
};

exports.removeFromCart = (req,res) =>{
    AccountModel.findOne({
        // _id : req.cookies.userId
        _id : req.body.userId
    },function(err,user){
        if(err) {console.log(err)}
        else{  
            // console.log('zo');
            user.removeFromCart(req.body.productId);
            res.json('remove succesfully');
            // .then(() => {
            //    res.json('remove succesfully'); // console.log('add successfully');
            // }).catch(err => console.log(err));
        }
    })
};
