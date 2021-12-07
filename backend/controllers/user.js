const AccountModel = require('../models/user');
const ProductModel = require('../models/product');
const OrderModel = require('../models/order');



const checkoutCart = async function(req,res,next){
    let user =  await AccountModel.findById(req.body.userId);
    // let listProducts = req.body.listProducts;
    let listProducts = user.cart;
    let listBuyProducts = [];
    let listExceedQuantityProducts = [];
    let listDeletedProducts = [];
    let newOrder = new OrderModel;
    let check =0;

    await Promise.all(listProducts.items.map(async(product) =>{
        try{
            // console.log(product);
            let DBproduct = await ProductModel.findById(product.productId);
            listBuyProducts.push(DBproduct);
            // console.log(DBproduct);
            newOrder.orderBy = user._id;
            if(DBproduct){
                if(DBproduct.deleted == true){
                    check = 1;
                    listDeletedProducts.push(DBproduct.nameProduct);
                }
                else{
                    if(product.quantity > DBproduct.quantity){
                        check =1;
                        listExceedQuantityProducts.push(DBproduct.nameProduct);
                    }
                    else{
                        newOrder.items.push({
                            productId: DBproduct._id,
                            quantity: product.quantity,
                            price: DBproduct.price
                        });
                        DBproduct.quantity -= product.quantity;
                        if(!newOrder.orderPrice){
                            newOrder.orderPrice = 0;
                        }
                        newOrder.orderPrice += DBproduct.price*product.quantity;
                    }
                }
            }
        } 
        catch(err){
            // console.log(err);
            throw err;
        }
    }))
    if(check == 0){
        newOrder.save();
        user.cart.items = [];
        // user.listOrder.push({
        //     orderID : newOrder._id
        // });
        listBuyProducts.map((DBproduct)=>{
            DBproduct.save();
        });
        user.save();
        res.status(200).json({
            message: "Buy Successfully"
        });
    }
    else{
        res.status(203).json({
            message: "Buy Fail",
            listExceedQuantityProducts : listExceedQuantityProducts,
            listDeletedProducts : listDeletedProducts 
        })
    }
}

module.exports = {
    checkoutCart
};

