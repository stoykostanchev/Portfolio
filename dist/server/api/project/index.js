var express    = require('express'),
    controller = require('./project.controller'),
    router     = express.Router();
    
router.get('/:id', controller.findByUrlId );  
router.get('/'   , controller.find );   

module.exports = router;