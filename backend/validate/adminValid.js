const AccountModel = require('../models/user');

const adminValid = (req,res,next) =>{
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

module.exports = {
    adminValid : adminValid
}