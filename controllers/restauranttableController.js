let restauranttable = require('../models/restauranttableModel');

exports.list =  (req, res) =>{
        restauranttable.all((err, result) => {
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

exports.create =  (req, res) =>{
    restauranttable.create(req.body.name, (err, result) => {
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