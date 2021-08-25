const AccountModel = require('../models/user');

exports.postLoginForm = (req,res,next) =>{
    console.log('12312312');
    console.log(req.body);
    var username = req.body.username;
    var password = req.body.password;
    console.log(`username la ${username}  password la ${password}`);
    AccountModel.findOne({
        username: username,
        password: password
    }).then(data => {
        if (data.length != 0) {
            console.log(data);
            console.log(data._id);
            // res.cookie('userId',data._id);
            res.cookie('userId','123456');
            // var token = jwt.sign({ id: data._id, username: data.username, role: data.role }, 'haidat');
            res.send({
                message: 'Login Succesfully',
                status: 1,
                role : 0
                // data: data
                    // token: token
            })
        } else {
            console.log("Not existed user");
            res.send({
                message: "Not existed user",
                status: 0
            });
        }
    }).catch(error => {
        res.status(500).json('Error while Login');
    })
}

exports.postRegisterForm = (req,res,next) =>{
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    console.log(username +' ' + email);
    AccountModel.find().or([{ 'username': username }, { 'email': email }])
    .then(user => {
        if (user.length != 0) {
            console.log('Existed User');
            res.send({
                message: "Existed User",
                status : 0
            });
        } else {
            console.log('Not Existed User');
            AccountModel.create({
                username: username,
                password: password,
                email: email,
                role: 1,
            });
            res.send({
                message : "Not existed user",
                status : 1
            })
        }
    }).catch(err => {
        console.log('Error');
        res.status(500).json('Register Fail');
    })
}