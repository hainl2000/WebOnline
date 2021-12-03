const ProductModel = require('../models/products');
const AccountModel = require('../models/user');

exports.addProduct = (req,res,next) =>{
    var productName = req.body.productName;
    var imageURL = req.body.imageURL;
    var quantity = req.body.quantity;
    var price = req.body.price;
    var description = req.body.description;

    ProductModel.findOne({
        productName : productName 
    }).then(data=>{
        if(data){
            console.log('Existed Product');
            res.send({
                message : "Existed product",
                status : 3
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
        // res.status(500).json('Add product Fail');
        res.send({
            status : 3,
            message : "Add Product Fail"
        })
    })
}

exports.updateProduct = (req,res,next) =>{
    var nameProduct = req.body.nameProduct;
    var imageURL = req.body.imageURL;
    var quantity = req.body.quantity;
    var price = req.body.price;
    var description = req.body.description;
    try{

        ProductModel.findOneAndUpdate({_id : req.body.productId},
            {   $set:{
                    nameProduct : nameProduct,
                    imageURL : imageURL,
                    price : price,
                    description : description,
                    quantity : quantity
                }
            },(err,data)=>{
                if (err) 
                   return res.status(500).send(err);
                else{
                    if(data){
                        return res.send({
                            status : 1,
                            message : "Update product succesfully"
                        });
                    }
                    else{
                        return res.send({
                            status : 0,
                            message : "Not existed product | Error happens while updating"
                        })
                    }

                }
            })
    }catch(e){
        console.log(e);
    }
};

exports.deleteProduct = (req,res,next) =>{
    var productId = req.body.id;
    console.log("Product's id will be deleted is "+productId);
    AccountModel.find({

    }).then(data =>{
        data.forEach(user =>{
            user.removeFromCart(productId);
        });
        ProductModel.deleteOne({
            _id : productId
        }).then(data =>{
            res.json('Delete succesfully');
        }).catch(err =>{
            console.log(err);
        })
    }).catch(err =>{
        console.log(err);
    } )
}

