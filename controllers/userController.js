let jwt = require('jsonwebtoken');
let bcrypt = require('bcryptjs');
let userModels = require('../models/userModel');

// Register a new user
exports.register = function (req, res) {
    try{
        let hashedPassword = bcrypt.hashSync(req.body.password, 8);
        userModels.create({
            name : req.body.name,
            email : req.body.email,
            password : hashedPassword
        }, function (err, user) {
            if (err) return res.status(500).send("There was a problem registering the user.")
            // create a token
            let token = jwt.sign({ id: user.id }, process.env.SECRET, {
                expiresIn: '2023-' // expires in 24 hours
            });
            res.status(200).send({ auth: true, token: token });
        });
    }catch(err){
        res.send(err);
    }
    }

// Login a user
     