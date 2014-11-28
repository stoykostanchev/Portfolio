var express    = require('express'),
    controller = require('./tutorial.controller'),
    router     = express.Router();
    
router.get('/:url_id', controller.findByUrlId );  
router.get('/'   , controller.find );   

module.exports = router;
