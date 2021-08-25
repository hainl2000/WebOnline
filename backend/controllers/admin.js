const ProductModel = require('../models/products');
const AccountModel = require('../models/user');

exports.addProduct = (req,res,next) =>{
    console.log(process.env.MongoURL);
    var productName = req.body.productName;
    var imageURL = req.body.imageURL;
    var quantity = req.body.quantity;
    var price = req.body.price;
    var description = req.body.description;

    console.log(productName);
    ProductModel.findOne({
        productName : productName 
    }).then(data=>{
        // console.log('111');
        // console.log(data.length);
        if(data){
            console.log('Existed Product');
            res.send({
                message : "Existed product",
                status : 0
            })
        }
        else{
            console.log('Add Product Succesfully');
            ProductModel.create({
                nameProduct : productName,
                imageURL : imageURL,
                quantity : quantity,
                price : price,
                description : description
            });
            res.send({
                message: "Add Product Succesfully",
                status : 1
            })
        }
    }).catch(err =>{
        console.log(err);
        console.log('Add product Error');
        res.status(500).json('Add product Fail');
    })
}

exports.updateProduct = (req,res,next) =>{
    var productName = req.body.productName;
    var imageURL = req.body.imageURL;
    var quantity = req.body.quantity;
    var price = req.body.price;
    var description = req.body.description;
    try{
        ProductModel.findOneAndUpdate({nameProduct : productName},
            {   $set:{
                    imageURL : imageURL,
                    price : price,
                    description : description,
                    },
                $inc:{
                    quantity : quantity
                }
            },(err,data)=>{
                console.log(err);
                console.log('111');
                if (err) 
                   return res.status(500).send(err);
               return res.send(data);
            })
    }catch(e){
        console.log(e);
    }
    //     .then(data =>{
    //         console.log(data);
    //         res.send({
    //             message : "Update product succesfully",
    //             status : 1
    //         })
    //     })
    // .catch(err =>{
    //     console.log(err);
    //     console.log('Update product Error');
    //     res.status(500).json('Update product Fail');
    // })
};

exports.deleteProduct = (req,res,next) =>{
    var productId = req.body.id;
    AccountModel.find({

    }).then(data =>{
        data.forEach(user =>{
            console.log('1');
            console.log(user);
            user.removeFromCart(productId);
        });
        ProductModel.deleteOne({
            _id : productId
        }).then(data =>{
            res.json('delete succesfully');
        }).catch(err =>{
            console.log(err);
        })
    }).catch(err =>{
        console.log(err);
    } )
}

