const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    nameProduct : {
        type : String,
        required : true
    },
    imageURL: {
        type : String,
        required:true
    },
    quantity: {
        type: Number,
        required : true
    },
    price: {
        type: Number
    },
    description: {
        type: String
    }
},{
    collection: 'Products',
    versionKey: false
});



const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;