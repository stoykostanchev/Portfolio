var express    = require('express'),
    controller = require('./message.controller.js'),
    router     = express.Router();
    
router.post('/', controller.save);

module.exports = router;