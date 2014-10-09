var Tutorial = require('./../../../db/models/Tutorial');

function callback(res) {
    return function(err, posts) {
        if (err) {
            res.send(err);
        } else {
            res.json(posts); 
        }
    };
};

exports.findById = function(req, res) {
    return Tutorial.find({ id : req.params.id }, req.query.fields, callback(res));
}

exports.find  = function(req, res) {
    return Tutorial.find({}, req.query.fields, callback(res));
}