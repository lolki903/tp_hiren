let tips_payment = require("../models/tipspaymentModel");

exports.list =  (req, res) =>{
    
        tips_payment.all((err, result) => {
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
   
};

exports.create =  (req, res)=> {
        tips_payment.create(req.body.amount, req.body.id_user, (err, result) => {
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
};
