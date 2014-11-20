var mongoose = require('mongoose'),
    express  = require('express'), 
    app      = express(),
    db, config;
    
//Config
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
config = require('./config/environment');

//Server
require('./routes')(app);
app.listen(config.port, function() {
    console.log('Im listening on port ' + config.port + '.');
});

//Db
if(config.seedDB) {
    require('./config/seed'); 
}
db = mongoose.connect(config.mongo.uri).connection;
db.once('open', function callback() {   
    console.log('Seasame opened in ' + config.env); 
});

