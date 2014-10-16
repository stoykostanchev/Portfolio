var Project = require('./../../../db/models/Project');

function callback(res) {
    return function(err, posts) {
        if (err) {
            res.send(err);
        } else {
            res.json(posts); 
        }
    };
};

exports.findByUrlId = function(req, res) {
    return Project.findOne({ url_id : req.params.id }, req.query.fields, callback(res));
}

exports.find  = function(req, res) {
    return Project.find({}, req.query.fields, callback(res));
}