'use strict';

// Development specific configuration
// ==================================
module.exports = {
    mongo : {
        uri    : 'mongodb://' + process.env.MONGO_UN  + ':' + process.env.MONGO_PASS  + '@ds035280.mongolab.com:35280/ssmongodb',
    },
    seedDB : true
};