let jwt = require('jsonwebtoken');
let bcrypt = require('bcryptjs');
let userModels = require('../models/userModel');


// Register a new user
exports.register =  (req, res) =>{
       userModels.create(req.body.firstname, req.body.lastname, req.body.status, (err, result) => {
            // affiche le résultat de la requête SQL
            if(err){
                 
                console.log(err)
                res.json({message: err})
            }
            else{
                res.status(200)
                res.json(result)
            }
    
        });
    }

// get one user
exports.getUser =  (req, res) =>{
       userModels.find(req.params.id, (err, result) => {
        if(err){
             
            console.log(err)
            res.json({message: err})
        }
        else{
            res.status(200)
            res.json(result)
        }
        });
}

// get all users
exports.getUsers = (req, res)=> {
       userModels.all((err, result) => {
        if(err){
            console.log(err)
            res.json({message: err})
        }
        else{
            res.json(result)
        }
        });
}

// update one user
exports.updateUser =  (req, res) =>{
         userModels.update(req.params.id, req.body.firstname, req.body.lastname, req.body.status, (err, result) => {
          if(err){
                console.log(err)
                res.json({message: err})
          }
          else{
                res.status(201)
                res.json(result)
          }
          });
}

// delete one user
exports.deleteUser =  (req, res) =>{
        userModels.delete(req.params.id, (err, result) => {
        if(err){
             
            console.log(err)
            res.json({message: err})
        }
        else{
            res.status(200)
            res.json(result)
        }
        });
}