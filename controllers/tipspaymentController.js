let tips_payment = require("../models/tipspaymentModel");

exports.list =  (req, res) =>{
    
        tips_payment.all((err, result) => {
            if(err){
                 
                console.log(err)
                res.json({message: err})
            }
            else{
                res.status(200)
                res.json(result)
            }
        });
   
};

exports.create =  (req, res)=> {
        tips_payment.create(req.body.amount, req.body.id_user, (err, result) => {
            if(err){
                 
                console.log(err)
                res.json({message: err})
            }
            else{
                res.status(200)
                res.json(result)
            }
        });
};

exports.delete =  (req, res) =>{
    tips_payment.delete(req.params.id, (err, result) => {
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
    tips_payment.update(req.params.id,req.body.amount,req.body.id_user, (err, result) => {
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

exports.getOne =  (req, res) =>{
    tips_payment.find(req.params.id, (err, result) => {
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
