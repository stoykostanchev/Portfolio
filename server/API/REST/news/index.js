var express    = require('express'),
    controller = require('./controller.js'),
    router     = express.Router();
    
    
router.get('/', controller.find);

module.exports = router;