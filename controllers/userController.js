let jwt = require('jsonwebtoken');
let bcrypt = require('bcryptjs');
let userModels = require('../models/userModel');
let my = require('../config/database');

// Register a new user
exports.register = function (req, res) {
    try{
        let hashedPassword = bcrypt.hashSync(req.body.password, 8);
        let sql = "INSERT INTO users (firstname, lastname, status) VALUES (?,?,?)";
        my.query(sql, [req.body.fisrtname, req.body.lastname, req.body.status], (err, results) => {
            if (err) throw err;
            res.send(results);
        });
    }catch(err){
        res.send(err);
    }
    }

// update a user
exports.getUser = function (req, res) {
    try{
        let sql = "SELECT * FROM users WHERE id = ?";
        my.query(sql, [req.params.id], (err, results) => {
            if (err) throw err;
            res.send(results);
        });
    }catch(err){
        res.send(err);
    }
}