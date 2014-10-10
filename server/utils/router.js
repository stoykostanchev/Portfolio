var express = require('express'), 
    bodyParser    = require('body-parser'),
    clientsFolder = __dirname + '/../../client/';

module.exports.init = function (app) {
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));
    // parse application/json
    app.use(bodyParser.json());
    //----------- Static files ----------
    app.use(express.static(clientsFolder));
    //------ API routes ----------
    require('../API/routes')(app);
};