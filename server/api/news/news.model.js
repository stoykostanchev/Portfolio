var mongoose = require('mongoose'),
    newsSchema = new mongoose.Schema({
        title  : String,
        date   : Date,
        author : String, 
        link   : String,
        description : String
    });
module.exports = mongoose.model('news', newsSchema);