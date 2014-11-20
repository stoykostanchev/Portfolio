var express    = require('express'),
    controller = require('./news.controller.js'),
    router     = express.Router();
    
    
router.get('/', controller.find);

module.exports = router;