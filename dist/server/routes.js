var express = require('express'), 
    bodyParser    = require('body-parser'),
    favicon  = require('serve-favicon'),
    clientsFolder = __dirname + '/../client/';

module.exports = function (app) {
    // favicon
    app.use(favicon(clientsFolder + '/favicon.ico'));
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));
    // parse application/json
    app.use(bodyParser.json());
    //----------- Static files ----------
    app.use(express.static(clientsFolder));
    //------ API routes ----------
    require('./api/routes')(app);
};