var express    = require('express');
var controller = require('./controller');
var router     = express.Router();

router.get('/latest'  , controller.getLatest);
router.get('/:id' , controller.findById );
router.get('/'        , controller.find     );

module.exports = router;