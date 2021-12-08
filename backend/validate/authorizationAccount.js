const AccountModel = require('../models/user');
const jwt = require("jsonwebtoken");

const authorizeAdmin = (req,res,next) =>{
    const tokenUserId = req.cookies.userId;
    if(!tokenUserId){
        console.log("Stop o day ");
        res.status(403).send({
            message: "Not login"
        })
    }
    try{
        const userId  = jwt.verify(tokenUserId,process.env.JWT_KEY);
        AccountMode.findOne({
            _id : userId
        }).then(data =>{
            if(data.role == 0){
                console.log("Login = admin account");
                req.userId = data._id;
                return next();
            }
            else{
                // console.log("Stop o day 1");
                res.status(403).send({
                    message: "Not login = admin account"
                })
            }
        })
    }catch {
        return res.sendStatus(403);
    }
}

const authorizeUser = (req,res,next) =>{
    const tokenUserId = req.cookies.userId;
    if(!tokenUserId){
        // console.log("Stop o day ");
            res.status(403).send({
                message: "Not login"
            })
    }
    try{
        const userId  = jwt.verify(tokenUserId,process.env.JWT_KEY);
        AccountMode.findOne({
            _id : userId
        }).then(data =>{
            if(data.role == 1){
                console.log("Login = user account");
                req.userId = data._id;
                return next();
            }
            else{
                // console.log("Stop o day 1");
                return res.status(403).send({
                    message: "Not login = user account"
                })
            }
        })
    }catch {
        return res.sendStatus(403);
    }
};


module.exports = {
    authorizeAdmin,
    authorizeUser
}