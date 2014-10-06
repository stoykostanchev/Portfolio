var mongoose = require('mongoose'),
    dbAuth   = require('./db/dbcreditentials'),
    port     = process.env.PORT || 3000,
    router   = require('./utils/router'),
    express  = require('express'), 
    app      = express(),
    db;
//Server
router.init(app);
app.listen(port, function() {
    console.log('Im listening on port ' + port + '.');
});
//Db
db = mongoose.connect(dbAuth.url).connection;
db.once('open', function callback() {   
    console.log('Oppeen Seasame'); 
});

