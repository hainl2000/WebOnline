const ProductModel = require('../models/products');
// var cookieParser = require('cookie-parser');

exports.getAllProduct = (req,res,next) =>{
    ProductModel.find({
        
    }).then(data =>{
        // console.log('1'  + data);
        // var cookies = parseCookies(req.cookies.userId);
        console.log(req.cookies.userId);
        res.send({
            listProducts : data});
    }).catch(err =>{
        console.log(err);
    } )
};

