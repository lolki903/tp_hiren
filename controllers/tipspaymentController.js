let tips_payment = require("../models/tipspayment");

exports.list = function (req, res) {
    try{
        tips_payment.all((err, result) => {
            res.status(200).json(result);
        });
    }catch(err){
        res.end(err);
    }
};

exports.create = function (req, res) {
    try{
        tips_payment.create(req.body.amount, req.body.id_user, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    }catch(err){
        res.send(err);
    }
};
