var express    = require('express'),
    controller = require('./controller'),
    router     = express.Router();
    
router.get('/:id', controller.findById );  
router.get('/'   , controller.find );   

module.exports = router;