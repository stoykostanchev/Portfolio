var Post = require('./../../../db/models/Post');

function callback (res) {
    return function(err, posts) {
        if (err) {
            res.send(err);
        } else {
            res.json(posts); 
        }
    };
};
/**
 * Get latest post
 */
exports.getLatest = function(req, res) {
    Post.find({ id : 6 }, req.query.fields, callback(res));
};

/**
 * Get a post by id
 */
exports.findById = function (req, res, next) {
    Post.find({ id : req.params.id }, req.query.fields, callback(res));
};

/**
 * Search posts
 */
exports.find = function (req, res, next) {
    Post.find({}, req.query.fields, callback(res));
};
