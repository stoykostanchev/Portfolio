var express = require('express'), 
    clientsFolder = __dirname + '/../../client/';

module.exports.init = function (app) {
    //----------- Static files ----------
    app.use(express.static(clientsFolder));
    //------ API routes ----------
    require('../API/routes')(app);
};

