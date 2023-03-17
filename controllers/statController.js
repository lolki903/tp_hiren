const statmodel = require('../models/statModel');

exports.total =  (req, res) =>{
    let total = 0
    statmodel.stattotal((err, result) => {
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

exports.tipsuser =  (req, res) =>{
    statmodel.usersTips(req.params.id, (err, result) => {
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
exports.monthtips =  (req, res) =>{
    statmodel.month(req.params.id, (err, result) => {
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
