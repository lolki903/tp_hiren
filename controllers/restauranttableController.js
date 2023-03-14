let restauranttable = require('../models/restauranttableModel');

exports.list = function (req, res) {
    try{
        restauranttable.all((err, result) => {
            res.status(200).json({result});
        });
    }catch(err){
        res.send(err);
    }
    
};

exports.create = function (req, res) {
    restauranttable.create(req.body.name, (err, result) => {
        res.send(result);
    });
}