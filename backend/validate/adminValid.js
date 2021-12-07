const AccountModel = require('../models/user');

const validateAdmin = (req,res,next) =>{
    if(!req.cookies.userId){
        console.log("Stop o day ");
            res.send({
                status : 0,
                message: "Ban chua dang nhap"
            })
    }
    AccountMode.findOne({
        _id : req.cookies.userId
    }).then(data =>{
        if(data.role == 0){
            console.log("Ban da dang nhap admin");
            next();
        }
        else{
            console.log("Stop o day 1");
            res.send({
                status : 0,
                message: "Ban chua dang nhap = tk admin"
            })
        }
    })
}

const validateUser = (req,res,next) =>{
    if(!req.cookies.userId){
        console.log("Stop o day ");
            res.send({
                status : 0,
                message: "Ban chua dang nhap"
            })
    }
    AccountMode.findOne({
        _id : req.cookies.userId
    }).then(data =>{
        if(data.role == 1){
            console.log("Ban da dang nhap user");
            next();
        }
        else{
            console.log("Stop o day 1");
            res.send({
                status : 0,
                message: "Ban chua dang nhap = tk user"
            })
        }
    })
}

const validate = {
    validateAdmin : validateAdmin,
    validateUser : validateUser
}

module.exports = {
    validate
}