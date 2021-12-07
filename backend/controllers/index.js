const AccountModel = require('../models/user');
const Bcrypt = require("bcryptjs");

const validateEmail = (email) => {
  return email.match(
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  );
};

const validateUsername = (username) =>{
    return username.match(
        /^[a-zA-Z\-]+$/
    ); 
};

const Login = (req,res) =>{
    let email = req.body.email;
    let password = req.body.password;
    AccountModel.findOne({
        email: email
    }).then(user => {
        if (user) 
        {
            // console.log(user);
            Bcrypt.compare(password, user.password ,function (err,result) {
                if(err){
                    return res.status(404).json({
                        message: "Auth failed"
                    });
                }
                if(result){
                    return res.status(200).json({
                        message: "Auth Successful",
                        role : user.role
                    })
                }
                else{
                    return res.status(200).json({
                        message: "PW failed"
                    })
                }
            })
        } 
        else {
            console.log("Not existed user");
            res.status(404).json({
                message: "Auth failed",
            });
        }
    }).catch(error => {
        console.log(error);
        res.status(500).json({
            message: "Error",
        });
    })
};


const Signup = (req,res) =>{
    let username = req.body.username;
    let email = req.body.email;
    console.log(validateEmail(email) +' ' + validateUsername(username));
    if(validateEmail(email) && validateUsername(username)){
        AccountModel.find().or([{ 'username': username }, { 'email': email }])
        .then(user => {
            if (user.length != 0) {
                console.log('Existed User or Existed Gmail');
                res.status(409).json({
                    message: "Existed User or Existed Gmail ",
                });
            } 
            else {
                // console.log('Not Existed User');
                let password = Bcrypt.hashSync(req.body.password,10);
                AccountModel.create({
                    username: username,
                    password: password,
                    email : email,
                    role: 1
                });
                res.status(201).json({
                    message : "Signup Succesfully",
                })
            }
        }).catch(err => {
            // console.log('Error');
            res.status(500).json({
                message : "Signup Fail"
            });
        })
    }
    else{
        res.status(401).json({
            message: "Not valid username or email"
        })
    }
    // console.log(username +' ' + email);
};

const Signout =(req,res) =>{

};

module.exports = {
    Login,
    Signup,
    Signout
}