var mongoose = require('mongoose'),
    msgSchema = new mongoose.Schema({
        date   : { 
            type   : Date, 
            default: Date.now 
        },
        message: String, 
        email  : String,
        name   : String
    });
module.exports = mongoose.model('message', msgSchema);