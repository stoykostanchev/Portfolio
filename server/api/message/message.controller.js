var Message = require('./message.model');

module.exports.save = function save(req, res) {
    var msg = new Message(req.body);
    msg.save(function () {
        res.send({ success : true, id : msg.id });
    });
}