let jwt = require('jsonwebtoken');
let bcrypt = require('bcryptjs');
let userModels = require('../models/userModel');


// Register a new user
exports.register = function (req, res) {
    try{
       userModels.create(req.body.firstname, req.body.lastname, req.body.status, (err, result) => {
            res.send(result);
        });
    }catch(err){
        res.send(err);
    }
    }

// get one user
exports.getUser = function (req, res) {
    try{
       userModels.find(req.params.id, (err, result) => {
            res.send(result);
        });
    }catch(err){
        res.send(err);
    }
}

// get all users
exports.getUsers = function (req, res) {
    try{
       userModels.all((err, result) => {
            if (err) throw err;
            res.send(result);
        });
    }catch(err){
        res.send(err);
    }
}