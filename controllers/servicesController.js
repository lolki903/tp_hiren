const serviceModel = require('../models/serviceModel');

exports.list =  (req, res) =>{
    serviceModel.all((err, result) => {
        if(err){
            res.status(401)
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
    serviceModel.create(req.body.shifttype,0, (err, result) => {
        if(err){
            res.status(401)
            console.log(err)
            res.json({message: err})
        }
        else{
            res.status(200)
            res.json(result)
        }
    })
}