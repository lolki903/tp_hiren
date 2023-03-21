const servicesUsers = require('../models/servicesUserModel');

exports.create =  (req, res) =>{
    servicesUsers.create(req.body.id_service,req.body.id_user, (err, result) => {
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
exports.list =  (req, res) =>{
    servicesUsers.all((err, result) => {
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

exports.delete =  (req, res) =>{
    servicesUsers.delete(req.params.id, (err, result) => {
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

exports.update =  (req, res) =>{
    servicesUsers.update(req.params.id,req.body.id_service,req.body.id_user, (err, result) => {
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

