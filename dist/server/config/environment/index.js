'use strict';

var _  = require('lodash'),
    current_cfg = require('./' + process.env.NODE_ENV + '.js'),
    default_cfg = {
        env: process.env.NODE_ENV,
        
        // Root path of server
        root: __dirname + '/../../..',
        
        // Server port
        port: process.env.PORT || 9000,
        
        // Should we populate the DB with sample data?
        seedDB: false,
        
        // MongoDB connection options
        mongo: {
        }
    };

module.exports = _.merge(default_cfg, current_cfg || {});