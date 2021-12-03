const ProductModel = require('../models/products');
const AccountModel = require('../models/user');
// var cookieParser = require('cookie-parser');

exports.getAllProducts = (req,res,next) =>{
    console.log('go to getAllProduct');
    ProductModel.find({
        
    }).then(data =>{
        // console.log(req.cookies.userId);
        res.send({
            listProducts : data});
    }).catch(err =>{
        console.log(err);
    } )
};



exports.getProductsFromCart = (req,res,next) =>{
    let listProducts = [];

    AccountModel.findOne({ _id : req.body.userId}).then(user =>{
        if(user){
            // console.log(user);
            const promises = []
            user.cart.items.forEach(product => {
                const sub_promise = new Promise((resolve,reject) => {
                    ProductModel.findOne({_id:product.productId}).then(product =>{
                        // console.log("Products là : ");
                        // console.log(product);
                        listProducts.push(product);
                        resolve(product);
                    })  
                })
                promises.push(sub_promise);
            })
            Promise.all(promises).then(result => {
                // console.log("Push khi nao");
                // console.log(result);
                res.send(result);
            })
        }
    })
}





