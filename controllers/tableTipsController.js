const tableTipsModel = require('../models/tableTipsModel');

exports.list =  (req, res) =>{
    tableTipsModel.all((err, result) => {
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
    tableTipsModel.delete(req.params.id, (err, result) => {
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

exports.create =  (req, res) =>{
    tableTipsModel.create(req.body.tips,req.body.id_restaurantTable,req.body.id_service, (err, result) => {
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
    tableTipsModel.update(req.params.id,req.body.tips,req.body.id_restaurantTable,req.body.id_service, (err, result) => {
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