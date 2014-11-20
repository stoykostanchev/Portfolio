var mongoose = require('mongoose'),
    projectSchema = new mongoose.Schema({
        title  : String,
        date   : Date,
        author : String, 
        img    : String,
        url_id : String,
        git_link    : String,
        description : String,
        short_descr : String
    });
module.exports = mongoose.model('projects', projectSchema);