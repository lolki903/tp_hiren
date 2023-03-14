const adminModel = require('../models/adminModel');

exports.login = (req, res) => {
    adminModel.login(req.body.pincode, (err, result) => {
        if(err){
            res.status(401)
            console.log(err)
            res.json({message: err})
        }
        else{
            res.status(200)
            res.json({message: "Bienvenue admin"})
        }
    });
}