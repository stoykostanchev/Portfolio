var Message = require('./../../../db/models/Message');

module.exports.save = function save(req, res) {
    var msg = new Message(req.body);
    msg.save();
    return res.send(msg);
}