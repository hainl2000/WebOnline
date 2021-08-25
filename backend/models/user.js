const mongoose = require('mongoose');
const ProductModel = require('../models/products');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/Web', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

const AccountSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        // default: 'admin@gmail.com',
        required: true
    },
    role: {
        type: Number,
        // default: 1
    },
    cart: {
       items: [{
           productId: {
               type: mongoose.Types.ObjectId,
               ref: 'Products',
               required : true
           },
           qty: {
               type :Number,
               required: true
           }
       }],
       totalPrice :Number
    },
    boughtProduct: {
        items: [{
            productId: {
                type: mongoose.Types.ObjectId,
                ref: 'Products',
                required : true
            },
            qty: {
                type :Number,
                required: true
            }
        }],
        totalPrice :Number
    }
}, {
    collection: 'Users',
    versionKey: false
});


AccountSchema.methods.addToCart = async function(productId) {
    const product = await ProductModel.findById(productId);
    console.log(product);
    if (product) {
        const cart = this.cart;
        console.log(cart);
        const isExisting = cart.items.findIndex(objInItems => new String(objInItems.productId).trim() === new String(product._id).trim());
        if (isExisting >= 0) {
            cart.items[isExisting].qty += 1;
        } else {
            cart.items.push({ productId: product._id, qty: 1 });
        }
        if (!cart.totalPrice) {
            cart.totalPrice = 0;
        }
        cart.totalPrice += product.price;
        return this.save();
    }
};

AccountSchema.methods.removeFromCart = function(productId) {
    console.log('product Id la ' + productId);
    ProductModel.findOne({
        _id : productId
    }).then(product =>{
        console.log('product la null ' + product);
        const cart = this.cart;
        const isExisting = cart.items.findIndex(objInItems => new String(objInItems.productId).trim() === new String(productId).trim());
        if (isExisting >= 0) {
            console.log('so luong la ' + isExisting);
            cart.totalPrice -= product.price * cart.items[isExisting].qty;
            cart.items.splice(isExisting, 1);
            return this.save();
        }
    }).catch(err =>{
        console.log(err);
    })
};


const AccountModel = mongoose.model('Account', AccountSchema);

module.exports = AccountModel;
