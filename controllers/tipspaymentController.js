let tips_payment = require("../models/tipspayment");

exports.list = function (req, res) {
    tips_payment.all((err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

exports.create = function (req, res) {
    tips_payment.create(req.body.amount, req.body.id_user, (err, result) => {
        res.send(result);
    });
};
