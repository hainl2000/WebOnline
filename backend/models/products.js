const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccountModel = require('./user');

mongoose.connect('mongodb://localhost/Web', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

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

// ProductSchema.pre('deleteOne',function(next){
//     console.log(AccountModel);
//     let id = this.getQuery()['_id'];
//     console.log(id);

//     AccountModel.find({

//     }).then(data =>{
//         console.log(data);
//         res.json(data);
//         // console.log('1'  + data);
//         // res.send({
//         //     listProducts : data});
//     }).catch(err =>{
//         console.log(err);
//     });
//     // console.log(this.getQuery()['_id']);

//     // const users = await AccountModel.find();
//     // AccountModel.find();
//     // AccountModel.find({
        
//     // }).then(users =>{   
//     //     users.forEach(user =>{
//     //         user.removeFromCart(id);
//     //     })
//     // }).catch(err =>{
//     //     console.log(err);
//     // });

//     // AccountModel.find({

//     // },function(err,users){
//     //     if(err) console.log(err);
//     //     else{
//     //         users.forEach(user =>{
//     //             user.removeFromCart(id);
//     //         })
//     //     }
//     // })



//     next();
// });

const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;