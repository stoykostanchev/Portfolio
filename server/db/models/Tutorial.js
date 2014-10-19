var mongoose = require('mongoose'),
    tutSchema = new mongoose.Schema({
        title  : String,
        date   : Date,
        url_id : String,
        author : String,
        description : String,
        category: String
    });
module.exports = mongoose.model('tutorials', tutSchema);