var mongoose = require('mongoose'),
    postSchema = new mongoose.Schema({
        title  : String,
        date   : Date,
        content: String, 
        author : String,
        url_id : String,
    });
module.exports = mongoose.model('posts', postSchema);