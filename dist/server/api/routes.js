var express = require('express'), 
    router  = express.Router();
    
//I love https://github.com/DaftMonk/fullstack-demo/blob/master/server/app.js.
//TODO : Start using git issues, make an issue to start using bower and app building tools :D
module.exports = function(app) {
    app.use('/server/api/post'    , require('./post'));
    app.use('/server/api/project' , require('./project'));
    app.use('/server/api/tutorial', require('./tutorial'));
    app.use('/server/api/news'    , require('./news'));
    app.use('/server/api/message' , require('./message'));
    app.use('/', router);
}