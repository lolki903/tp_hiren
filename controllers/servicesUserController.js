const servicesUsers = require('../models/servicesUserModel');

exports.create =  (req, res) =>{
    servicesUsers.create(req.body.id_service,req.body.id_user, (err, result) => {
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
exports.list =  (req, res) =>{
    servicesUsers.all((err, result) => {
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
