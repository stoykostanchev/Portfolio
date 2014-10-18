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
    Post.findOne({}).sort({date: -1}).exec(callback(res));
};

/**
 * Get a post by id
 */
exports.findByUrlId = function (req, res, next) {
    Post.findOne({ url_id : req.params.url_id }, req.query.fields, callback(res));
};

/**
 * Search posts
 */
exports.find = function (req, res, next) {
    Post.find({}, req.query.fields, callback(res));
};
