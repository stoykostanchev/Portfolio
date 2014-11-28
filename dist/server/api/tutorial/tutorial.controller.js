var Tutorial = require('./tutorial.model');

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
    return Tutorial.findOne({ url_id : req.params.url_id }, req.query.fields, callback(res));
}

exports.find  = function(req, res) {
    return Tutorial.find({}, req.query.fields, callback(res));
}