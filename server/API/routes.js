var express = require('express'), 
    router  = express.Router();
    
//I love https://github.com/DaftMonk/fullstack-demo/blob/master/server/app.js.
//TODO : Start using git issues, make an issue to start using bower and app building tools :D
module.exports = function(app) {
    app.use('/server/API/REST/post'    , require('./REST/post'));
    app.use('/server/API/REST/project' , require('./REST/project'));
    app.use('/server/API/REST/tutorial', require('./REST/tutorial'));
    app.use('/server/API/REST/news'    , require('./REST/news'));
    app.use('/server/API/REST/message' , require('./REST/message'));
    app.use('/', router);
}