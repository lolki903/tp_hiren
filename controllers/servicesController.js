const serviceModel = require('../models/serviceModel');

exports.list =  (req, res) =>{
    serviceModel.all((err, result) => {
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
    serviceModel.create(req.body.shifttype,0, (err, result) => {
        if(err){
             
            console.log(err)
            res.json({message: err})
        }
        else{
            res.status(200)
            res.json(result)
        }
    })
}

exports.update =  (req, res) =>{
    serviceModel.update(req.param.id,req.body.shiftclose,(err,result)=>{
        if(err){
             
            console.log(err)
            res.json({message: err})
        }
        else{
            res.status(200)
            res.json(result)
        }
    })
}

exports.delete =  (req, res) =>{
    serviceModel.delete(req.param.id,(err,result)=>{
        if(err){
             
            console.log(err)
            res.json({message: err})
        }
        else{
            res.status(200)
            res.json(result.data)
        }
    })
}