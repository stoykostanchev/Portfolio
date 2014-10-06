var express = require('express'), 
    router  = express.Router(),
    clientsFolder = __dirname + '/../../client/';

function init(app) {
    //----------- Static files ----------
    app.use(express.static(clientsFolder));

    //----------- API ----------
    var Post = require('./../db/models/Post.js');
    router.route('/server/API/REST/post')
        .get(function(req, res) {
            var id = req.query.latest ? 6 : req.query.id;   
            //This will use pipelining for the arguments, once a Mongo model kicks in
            Post.find({ id : id }, req.query.fields,function(err, posts) {
                if (err) {
                    res.send(err);
                } else {
                    res.json(posts); 
                }
            });
        });
    //---------------------
    app.use('/', router);
}
module.exports.init = init;

