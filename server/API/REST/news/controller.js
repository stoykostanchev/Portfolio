var News = require('./../../../db/models/News');

function callback(res) {
    return function(err, posts) {
        if (err) {
            res.send(err);
        } else {
            res.json(posts); 
        }
    };
};

exports.find  = function(req, res) {
    return News.find({}, req.query.fields, callback(res));
}