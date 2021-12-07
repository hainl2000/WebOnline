const ProductModel = require('../models/product');
// var cookieParser = require('cookie-parser');

const getAllActiveProducts = (req,res,next) =>{
    console.log('go to getAllProduct');
    let restrictedFields ={
        deleted : false
    }
    ProductModel.find({
        deleted : false
    },restrictedFields).then(data =>{
        // console.log(req.cookies.userId);
        res.json({
            'listActiveProducts' : data});
    }).catch(err =>{
        console.log(err);
    })
};

const createProduct = (req,res,next) =>{
    var nameProduct = req.body.nameProduct;
    var imageURL = req.body.imageURL;
    var quantity = req.body.quantity;
    var price = req.body.price;
    var description = req.body.description;
    var category = req.body.category

    ProductModel.findOne({
        nameProduct : nameProduct 
    }).then(data=>{
        // console.log(data);
        if(data){
            console.log('Existed Product');
            res.json({
                message : "Existed product",
                status : 3
            })
        }
        else{
            console.log('Add Product Succesfully');
            ProductModel.create({
                nameProduct : nameProduct,
                imageURL : imageURL,
                quantity : quantity,
                category : category,
                price : price,
                description : description,
            });
            res.json({
                message: "Add Product Succesfully",
                status : 1
            })
        }
    }).catch(err =>{
        console.log(err);
        console.log('Add product Error');
        res.json({
            status : 3,
            message : "Add Product Fail"
        })
    })
}

const updateProduct = (req,res,next) =>{
    var nameProduct = req.body.nameProduct;
    var imageURL = req.body.imageURL;
    var quantity = req.body.quantity;
    var price = req.body.price;
    var description = req.body.description;
    var category = req.body.category;
    try{
        ProductModel.findOneAndUpdate({_id : req.body.productId},
            {   $set:{
                    nameProduct : nameProduct,
                    imageURL : imageURL,
                    price : price,
                    description : description,
                    quantity : quantity,
                    category: category
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

const deleteProduct = (req,res,next) =>{
    let productId = req.body.id;
    // console.log("Product's id will be deleted is "+productId);
    ProductModel.findOneAndUpdate({_id : req.body.productId},
    {
        $set:{
            deleted : true
        }
    },(err,data)=>{
        if (err) 
            return res.status(401).json({'error':err});
        else{
            if(data){
                return res.status(200).json({
                    message : "Delete product succesfully"
                });
            }
            else{
                return res.status(401).json({
                    message : "Not existed product | Error happens while deleting"
                })
            }
        }
    })
};

const getListProductsByCategory = (req,res) =>{
    let restrictedFields ={
        deleted : false
    }
    ProductModel.find({
        category : req.body.category,
        deleted : false
    },restrictedFields).then(listProducts =>{
        return res.status(200).json({
            listProducts : listProducts
        })
    }).catch(err => {
        console.log(error);
        return res.status(500).json({
            message: "Error",
        });
    })
}


module.exports = {
    getAllActiveProducts,
    getListProductsByCategory,
    createProduct,
    updateProduct,
    deleteProduct
}





